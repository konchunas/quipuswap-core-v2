module DexCore is {
  [@inline] const err_unknown_func       : nat = 0n;
  [@inline] const err_func_set           : nat = 1n;
  [@inline] const err_high_func_index    : nat = 2n;
  [@inline] const err_cant_unpack_lambda : nat = 3n;
  [@inline] const err_wrong_pair_order   : nat = 4n;
  [@inline] const err_zero_a_in          : nat = 5n;
  [@inline] const err_zero_b_in          : nat = 6n;
  [@inline] const err_pair_listed        : nat = 7n;
  [@inline] const err_pair_not_listed    : nat = 8n;
  [@inline] const err_no_liquidity       : nat = 9n;
  [@inline] const err_no_shares_expected : nat = 10n;
  [@inline] const err_low_token_a_in     : nat = 11n;
  [@inline] const err_low_token_b_in     : nat = 12n;
  [@inline] const err_tez_store_404      : nat = 13n;
}

module Common is {
  [@inline] const err_not_admin                    : nat = 0n;
  [@inline] const err_not_pending_admin            : nat = 1n;
  [@inline] const err_not_manager                  : nat = 2n;
  [@inline] const err_fa12_transfer_entrypoint_404 : nat = 3n;
  [@inline] const err_fa2_transfer_entrypoint_404  : nat = 4n;
}
