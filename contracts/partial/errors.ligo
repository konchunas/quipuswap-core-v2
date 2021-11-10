module DexCore is {
  [@inline] const err_unknown_func                          : string = "100";
  [@inline] const err_func_set                              : string = "101";
  [@inline] const err_high_func_index                       : string = "102";
  [@inline] const err_cant_unpack_lambda                    : string = "103";
  [@inline] const err_wrong_pair_order                      : string = "104";
  [@inline] const err_zero_a_in                             : string = "105";
  [@inline] const err_zero_b_in                             : string = "106";
  [@inline] const err_pair_listed                           : string = "107";
  [@inline] const err_pair_not_listed                       : string = "108";
  [@inline] const err_no_liquidity                          : string = "109";
  [@inline] const err_no_shares_expected                    : string = "110";
  [@inline] const err_low_token_a_in                        : string = "111";
  [@inline] const err_low_token_b_in                        : string = "112";
  [@inline] const err_tez_store_404                         : string = "113";
  [@inline] const err_insufficient_liquidity                : string = "114";
  [@inline] const err_dust_out                              : string = "115";
  [@inline] const err_high_min_out                          : string = "116";
  [@inline] const err_empty_route                           : string = "117";
  [@inline] const err_zero_in                               : string = "118";
  [@inline] const err_wrong_route                           : string = "119";
  [@inline] const err_wrong_tez_amount                      : string = "120";
  [@inline] const err_tez_store_invest_tez_entrypoint_404   : string = "121";
  [@inline] const err_tez_store_divest_tez_entrypoint_404   : string = "122";
  [@inline] const err_tez_store_ban_baker_entrypoint_404    : string = "123";
  [@inline] const err_tez_store_vote_entrypoint_404         : string = "124";
  [@inline] const err_tez_store_is_banned_baker_view_404    : string = "125";
  [@inline] const err_flash_swaps_proxy_call_entrypoint_404 : string = "126";
  [@inline] const err_tez_store_get_tez_balance_view_404    : string = "127";
  [@inline] const err_flash_swap_callback_404               : string = "128";
  [@inline] const err_fa12_balance_callback_1_404           : string = "129";
  [@inline] const err_fa2_balance_callback_1_404            : string = "130";
  [@inline] const err_fa12_balance_callback_2_404           : string = "131";
  [@inline] const err_fa2_balance_callback_2_404            : string = "132";
  [@inline] const err_wrong_flash_swap_returns              : string = "133";
  [@inline] const err_can_not_refer_yourself                : string = "134";
}

module TezStore is {
  [@inline] const err_insufficient_tez_balance               : string = "200";
  [@inline] const err_baker_registry_validate_entrypoint_404 : string = "201";
}

module Common is {
  [@inline] const err_not_admin                      : string = "300";
  [@inline] const err_not_pending_admin              : string = "301";
  [@inline] const err_not_manager                    : string = "302";
  [@inline] const err_not_dex_core                   : string = "303";
  [@inline] const err_fa12_transfer_entrypoint_404   : string = "304";
  [@inline] const err_fa2_transfer_entrypoint_404    : string = "305";
  [@inline] const err_not_a_nat                      : string = "306";
  [@inline] const err_fa12_balance_of_entrypoint_404 : string = "307";
  [@inline] const err_fa2_balance_of_entrypoint_404  : string = "308";
  [@inline] const err_wrong_token_type               : string = "309";
}
