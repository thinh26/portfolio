const a0_0x5cb836 = a0_0x535c;
function a0_0x535c(_0x579f64, _0x388d56) {
  const _0x3ad8d1 = a0_0x3ad8();
  return (
    (a0_0x535c = function (_0x535cd4, _0x36c0dc) {
      _0x535cd4 = _0x535cd4 - 0x1e1;
      let _0x5d30f3 = _0x3ad8d1[_0x535cd4];
      return _0x5d30f3;
    }),
    a0_0x535c(_0x579f64, _0x388d56)
  );
}
(function (_0x16273a, _0x43b347) {
  const _0x14d84f = a0_0x535c,
    _0x4ce10d = _0x16273a();
  while (!![]) {
    try {
      const _0x4eb26d =
        (parseInt(_0x14d84f(0x1ec)) / 0x1) *
          (parseInt(_0x14d84f(0x1fd)) / 0x2) +
        -parseInt(_0x14d84f(0x1e7)) / 0x3 +
        -parseInt(_0x14d84f(0x1ff)) / 0x4 +
        (-parseInt(_0x14d84f(0x1e2)) / 0x5) *
          (-parseInt(_0x14d84f(0x1f4)) / 0x6) +
        (parseInt(_0x14d84f(0x201)) / 0x7) *
          (-parseInt(_0x14d84f(0x1f9)) / 0x8) +
        parseInt(_0x14d84f(0x1e3)) / 0x9 +
        -parseInt(_0x14d84f(0x1fb)) / 0xa;
      if (_0x4eb26d === _0x43b347) break;
      else _0x4ce10d["push"](_0x4ce10d["shift"]());
    } catch (_0x10a27e) {
      _0x4ce10d["push"](_0x4ce10d["shift"]());
    }
  }
})(a0_0x3ad8, 0x40546);
function a0_0x3ad8() {
  const _0x30a329 = [
    "335859rxdaoT",
    "[Service\x20Worker]\x20Activating\x20Service\x20Worker\x20....",
    "delete",
    "open",
    "respondWith",
    "request",
    "action",
    "claim",
    "30ngKJTs",
    "map",
    "[Service\x20Worker]\x20Installing\x20Service\x20Worker\x20....",
    "skipWaiting",
    "waitUntil",
    "536104akHooA",
    "log",
    "1484770RnQgOs",
    "then",
    "2knrNqm",
    "[Service\x20Worker]\x20Nhận\x20yêu\x20cầu\x20skipWaiting,\x20kích\x20hoạt\x20SW\x20mới\x20ngay\x20!",
    "711580CdUSvG",
    "clone",
    "21DoyXit",
    "install",
    "activate",
    "160610IkGCZx",
    "3783366nSQcZw",
    "match",
    "fetch",
    "url",
    "377814HIQhNR",
    "dynamic-v1",
    "put",
    "[Service\x20Worker]\x20Removing\x20old\x20cache.",
    "addEventListener",
  ];
  a0_0x3ad8 = function () {
    return _0x30a329;
  };
  return a0_0x3ad8();
}
let CACHE_DYNAMIC_NAME = a0_0x5cb836(0x1e8);
(self[a0_0x5cb836(0x1eb)](a0_0x5cb836(0x202), function (_0x1884bd) {
  const _0x206e39 = a0_0x5cb836;
  console[_0x206e39(0x1fa)](_0x206e39(0x1f6), _0x1884bd);
}),
  self[a0_0x5cb836(0x1eb)](a0_0x5cb836(0x1e1), (_0x1155d6) => {
    const _0x5a44ec = a0_0x5cb836;
    return (
      console[_0x5a44ec(0x1fa)](_0x5a44ec(0x1ed), _0x1155d6),
      _0x1155d6[_0x5a44ec(0x1f8)](
        caches["keys"]()[_0x5a44ec(0x1fc)](function (_0x36223c) {
          const _0x208735 = _0x5a44ec;
          return Promise["all"](
            _0x36223c[_0x208735(0x1f5)](function (_0x5460ee) {
              const _0xff16a5 = _0x208735;
              if (_0x5460ee !== CACHE_DYNAMIC_NAME)
                return (
                  console["log"](_0xff16a5(0x1ea), _0x5460ee),
                  caches[_0xff16a5(0x1ee)](_0x5460ee)
                );
            }),
          );
        }),
      ),
      self["clients"][_0x5a44ec(0x1f3)]()
    );
  }),
  self["addEventListener"]("message", (_0x16b094) => {
    const _0xc1bc3e = a0_0x5cb836;
    _0x16b094["data"][_0xc1bc3e(0x1f2)] === _0xc1bc3e(0x1f7) &&
      (console["log"](_0xc1bc3e(0x1fe)), self[_0xc1bc3e(0x1f7)]());
  }),
  self[a0_0x5cb836(0x1eb)](a0_0x5cb836(0x1e5), function (_0x2521d5) {
    const _0x362074 = a0_0x5cb836;
    _0x2521d5[_0x362074(0x1f0)](
      caches[_0x362074(0x1e4)](_0x2521d5[_0x362074(0x1f1)])[_0x362074(0x1fc)](
        function (_0x7f0799) {
          const _0xa515b8 = _0x362074;
          return _0x7f0799
            ? _0x7f0799
            : fetch(_0x2521d5[_0xa515b8(0x1f1)])
                ["then"](function (_0x1b7f9b) {
                  const _0xce1135 = _0xa515b8;
                  return caches[_0xce1135(0x1ef)](CACHE_DYNAMIC_NAME)["then"](
                    function (_0x43eaa0) {
                      const _0x2a03f4 = _0xce1135;
                      return (
                        _0x43eaa0[_0x2a03f4(0x1e9)](
                          _0x2521d5["request"][_0x2a03f4(0x1e6)],
                          _0x1b7f9b[_0x2a03f4(0x200)](),
                        ),
                        _0x1b7f9b
                      );
                    },
                  );
                })
                ["catch"](function (_0x41864d) {
                  const _0x234327 = _0xa515b8;
                  console[_0x234327(0x1fa)](_0x41864d);
                });
        },
      ),
    );
  }));
