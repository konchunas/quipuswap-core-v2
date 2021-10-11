import { MichelsonMap, MichelsonMapKey } from "@taquito/michelson-encoder";

import { BigNumber } from "bignumber.js";

export type Fees = {
  interface_fee: BigNumber;
  swap_fee: BigNumber;
};

export type DexCoreStorage = {
  metadata: MichelsonMap<MichelsonMapKey, unknown>;
  token_metadata: MichelsonMap<MichelsonMapKey, unknown>;
  ledger: MichelsonMap<MichelsonMapKey, unknown>;
  accounts: MichelsonMap<MichelsonMapKey, unknown>;
  managers: string[];
  fees: Fees;
  admin: string;
  pending_admin: string;
  cycle_duration: BigNumber;
  tokens_count: BigNumber;
};
