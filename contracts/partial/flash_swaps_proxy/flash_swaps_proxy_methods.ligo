function default(
  const lambda          : default_t;
  const s               : storage_t)
                        : return_t is
  block {
    only_dex_core(s.dex_core);
  } with (lambda(Unit), s)
