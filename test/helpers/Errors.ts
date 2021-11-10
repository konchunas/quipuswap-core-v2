export enum DexCore {
  ERR_UNKNOWN_FUNC = "100",
  ERR_FUNC_SET = "101",
  ERR_HIGH_FUNC_INDEX = "102",
  ERR_CANT_UNPACK_LAMBDA = "103",
  ERR_WRONG_PAIR_ORDER = "104",
  ERR_ZERO_A_IN = "105",
  ERR_ZERO_B_IN = "106",
  ERR_PAIR_LISTED = "107",
  ERR_PAIR_NOT_LISTED = "108",
  ERR_NO_LIQUIDITY = "109",
  ERR_NO_SHARES_EXPECTED = "110",
  EER_LOW_TOKEN_A_IN = "111",
  EER_LOW_TOKEN_B_IN = "112",
  ERR_TEZ_STORE_404 = "113",
  ERR_INSUFFICIENT_LIQUIDITY = "114",
  ERR_DUST_OUT = "115",
  ERR_HIGH_MIN_OUT = "116",
  ERR_EMPTY_ROUTE = "117",
  ERR_ZERO_IN = "118",
  ERR_WRONG_ROUTE = "119",
  ERR_WRONG_TEZ_AMOUNT = "120",
  ERR_TEZ_STORE_INVEST_TEZ_ENTRYPOINT_404 = "121",
  ERR_TEZ_STORE_DIVEST_TEZ_ENTRYPOINT_404 = "122",
  ERR_TEZ_STORE_BAN_BAKER_ENTRYPOINT_404 = "123",
  ERR_TEZ_STORE_VOTE_ENTRYPOINT_404 = "124",
  ERR_TEZ_STORE_IS_BANNED_BAKER_VIEW_404 = "125",
  ERR_FLASH_SWAPS_PROXY_CALL_ENTRYPOINT_404 = "126",
  ERR_TEZ_STORE_GET_TEZ_BALANCE_VIEW_404 = "127",
  ERR_FLASH_SWAP_CALLBACK_404 = "128",
  ERR_FA12_BALANCE_CALLBACK_1_404 = "129",
  ERR_FA2_BALANCE_CALLBACK_1_404 = "130",
  ERR_FA12_BALANCE_CALLBACK_2_404 = "131",
  ERR_FA2_BALANCE_CALLBACK_2_404 = "132",
  ERR_WRONG_FLASH_SWAP_RETURNS = "133",
  ERR_CAN_NOT_REFER_YOURSELF = "134",
}

export enum TezStore {
  ERR_INSUFFICIENT_TEZ_BALANCE = "200",
  ERR_BAKER_REGISTRY_VALIDATE_ENTRYPOINT_404 = "201",
}

export enum Common {
  ERR_NOT_ADMIN = "300",
  ERR_NOT_PENDING_ADMIN = "301",
  ERR_NOT_MANAGER = "302",
  ERR_NOT_DEX_CORE = "303",
  ERR_FA12_TRANSFER_ENTRYPOINT_404 = "304",
  ERR_FA2_TRANSFER_ENTRYPOINT_404 = "305",
  ERR_NOT_A_NAT = "306",
  ERR_FA12_BALANCE_OF_ENTRYPOINT_404 = "307",
  ERR_FA2_BALANCE_OF_ENTRYPOINT_404 = "308",
  ERR_WRONG_TOKEN_TYPE = "309",
}
