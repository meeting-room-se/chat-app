!(function(e) {
    var t,
        n,
        o,
        i,
        d,
        c,
        l,
        s =
            '<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M662.635 460.563q0-87.1-61.912-149.013t-149.013-61.912-149.013 61.912-61.912 149.013 61.912 149.013 149.013 61.912 149.013-61.912 61.912-149.013zM903.69 852.278q0 24.482-17.891 42.373t-42.373 17.891q-25.424 0-42.373-17.891l-161.488-161.017q-84.276 58.381-187.853 58.381-67.326 0-128.768-26.13t-105.933-70.622-70.622-105.933-26.13-128.768 26.13-128.768 70.622-105.933 105.933-70.622 128.768-26.13 128.767 26.13 105.933 70.622 70.622 105.933 26.13 128.768q0 103.578-58.381 187.853l161.488 161.488q17.421 17.421 17.421 42.373z"  ></path></symbol></svg>',
        a = (t = document.getElementsByTagName('script'))[
            t.length - 1
        ].getAttribute('data-injectcss');
    if (a && !e.__iconfont__svg__cssinject__) {
        e.__iconfont__svg__cssinject__ = !0;
        try {
            document.write(
                '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
            );
        } catch (e) {
            console && console.log(e);
        }
    }
    function r() {
        c || ((c = !0), i());
    }
    (n = function() {
        var e,
            t,
            n,
            o,
            i,
            d = document.createElement('div');
        (d.innerHTML = s),
            (s = null),
            (e = d.getElementsByTagName('svg')[0]) &&
                (e.setAttribute('aria-hidden', 'true'),
                (e.style.position = 'absolute'),
                (e.style.width = 0),
                (e.style.height = 0),
                (e.style.overflow = 'hidden'),
                (t = e),
                (n = document.body).firstChild
                    ? ((o = t),
                      (i = n.firstChild).parentNode.insertBefore(o, i))
                    : n.appendChild(t));
    }),
        document.addEventListener
            ? ~['complete', 'loaded', 'interactive'].indexOf(
                  document.readyState,
              )
                ? setTimeout(n, 0)
                : ((o = function() {
                      document.removeEventListener('DOMContentLoaded', o, !1),
                          n();
                  }),
                  document.addEventListener('DOMContentLoaded', o, !1))
            : document.attachEvent &&
              ((i = n),
              (d = e.document),
              (c = !1),
              (l = function() {
                  try {
                      d.documentElement.doScroll('left');
                  } catch (e) {
                      return void setTimeout(l, 50);
                  }
                  r();
              })(),
              (d.onreadystatechange = function() {
                  'complete' == d.readyState &&
                      ((d.onreadystatechange = null), r());
              }));
})(window);
