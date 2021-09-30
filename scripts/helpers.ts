import fs from "fs";

import { execSync } from "child_process";

import { OriginationOperation, TezosToolkit } from "@taquito/taquito";

import { confirmOperation } from "./confirmation";

import env from "../env";

export const getLigo = (
  isDockerizedLigo: boolean,
  ligoVersion: string = env.ligoVersion
) => {
  let path: string = "ligo";

  if (isDockerizedLigo) {
    path = `docker run -v $PWD:$PWD --rm -i ligolang/ligo:${ligoVersion}`;

    try {
      execSync(`${path}  --help`);
    } catch (err) {
      path = "ligo";

      execSync(`${path}  --help`);
    }
  } else {
    try {
      execSync(`${path}  --help`);
    } catch (err) {
      path = `docker run -v $PWD:$PWD --rm -i ligolang/ligo:${ligoVersion}`;

      execSync(`${path}  --help`);
    }
  }

  return path;
};

export const getContractsList = () => {
  return fs
    .readdirSync(env.contractsDir)
    .filter((file) => file.endsWith(".ligo"))
    .map((file) => file.slice(0, file.length - 5));
};

export const getMigrationsList = () => {
  return fs
    .readdirSync(env.migrationsDir)
    .filter((file) => file.endsWith(".js"))
    .map((file) => file.slice(0, file.length - 3));
};

export const compile = async (
  format: string,
  contract: string = undefined,
  contractsDir: string = env.contractsDir,
  outputDir: string = env.buildDir,
  ligoVersion: string = env.ligoVersion
) => {
  const ligo: string = getLigo(true, ligoVersion);
  const contracts: string[] = !contract ? getContractsList() : [contract];

  contracts.forEach((contract) => {
    const michelson: string = execSync(
      `${ligo} compile contract $PWD/${contractsDir}/${contract}.ligo ${
        format === "json" ? "--michelson-format json" : ""
      }`,
      { maxBuffer: 1024 * 500 }
    ).toString();

    try {
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
      }

      if (format === "json") {
        const artifacts: any = JSON.stringify(
          {
            contractName: contract,
            michelson: JSON.parse(michelson),
            networks: {},
            compiler: {
              name: "ligo",
              version: ligoVersion,
            },
            networkType: "tezos",
          },
          null,
          2
        );

        fs.writeFileSync(`${outputDir}/${contract}.json`, artifacts);
      } else {
        fs.writeFileSync(`${outputDir}/${contract}.tz`, michelson);
      }
    } catch (e) {
      console.error(e);
    }
  });
};

export const compileLambdas = async (
  json: string,
  contract: string,
  ligoVersion: string = env.ligoVersion
) => {
  const ligo: string = getLigo(true, ligoVersion);
  const pwd: string = execSync("echo $PWD").toString();
  const lambdas: any = JSON.parse(
    fs.readFileSync(`${pwd.slice(0, pwd.length - 1)}/${json}`).toString()
  );
  let res: any[] = [];

  try {
    for (const lambda of lambdas) {
      const michelson: string = execSync(
        `${ligo} compile parameter $PWD/${contract} 'Setup_func(record index=${lambda.index}n; func=${lambda.name}; end)' --michelson-format=json`,
        { maxBuffer: 1024 * 500 }
      ).toString();

      res.push(JSON.parse(michelson).args[0].args[0]);

      console.log(
        lambda.index + 1 + ". " + lambda.name + " successfully compiled."
      );
    }

    if (!fs.existsSync(`${env.buildDir}/lambdas`)) {
      fs.mkdirSync(`${env.buildDir}/lambdas`);
    }

    fs.writeFileSync(
      `${env.buildDir}/lambdas/dex_lambdas.json`,
      JSON.stringify(res)
    );
  } catch (e) {
    console.error(e);
  }
};

export const migrate = async (
  tezos: TezosToolkit,
  contract: string,
  storage: any
) => {
  try {
    const artifacts: any = JSON.parse(
      fs.readFileSync(`${env.buildDir}/${contract}.json`).toString()
    );
    const operation: OriginationOperation = await tezos.contract
      .originate({
        code: artifacts.michelson,
        storage: storage,
      })
      .catch((e) => {
        console.error(e);

        return null;
      });

    await confirmOperation(tezos, operation.hash);

    artifacts.networks[env.network] = { [contract]: operation.contractAddress };

    if (!fs.existsSync(env.buildDir)) {
      fs.mkdirSync(env.buildDir);
    }

    fs.writeFileSync(
      `${env.buildDir}/${contract}.json`,
      JSON.stringify(artifacts, null, 2)
    );

    return operation.contractAddress;
  } catch (e) {
    console.error(e);
  }
};

export const getDeployedAddress = (contract: string) => {
  try {
    const artifacts: any = JSON.parse(
      fs.readFileSync(`${env.buildDir}/${contract}.json`).toString()
    );

    return artifacts.networks[env.network][contract];
  } catch (e) {
    console.error(e);
  }
};

export const runMigrations = async (
  from: number = 0,
  to: number = getMigrationsList().length,
  network: string = "development"
) => {
  try {
    const migrations: string[] = getMigrationsList();
    const networkConfig: any = env.networks[network];
    const tezos: TezosToolkit = new TezosToolkit(networkConfig.rpc);

    for (let i: number = from; i < to; ++i) {
      const execMigration: any = require(`../${env.migrationsDir}/${migrations[i]}.js`);

      await execMigration(tezos);
    }
  } catch (e) {
    console.error(e);
  }
};
