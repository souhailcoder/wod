$(function () {
    function k(t, a) {
        for (var e = 0; e < t[a].link.length; e++)
            if ("alternate" == t[a].link[e].rel) {
                var s = t[a].link[e].href;
                break;
            }
        return s;
    }
    function y(t, a) {
        var e = t[a].title.$t,
            s = t[a].content.$t;
        if ("media$thumbnail" in t[a]) {
            var i = t[a].media$thumbnail.url,
                l = i.replace("/s72-c", "/w640"),
                n = i.replace("/s72-c", "/w280"),
                o = i.replace("/s72-c", "/w100");
            -1 < s.indexOf("youtube.com/embed") && ((l = i.replace("/default.", "/hqdefault.")), (n = i.replace("/default.", "/mqdefault.")), (o = i));
        } else (l = noThumbnail), (n = noThumbnail.replace("/s680", "/w280")), (o = noThumbnail.replace("/s680", "/w100"));
        return ['<img class="post-thumb" alt="' + e + '" src="' + l + '"/>', '<img class="post-thumb" alt="' + e + '" src="' + n + '"/>', '<img class="post-thumb" alt="' + e + '" src="' + o + '"/>'];
    }
    function C(t, a) {
        if (null != t[a].category) var e = '<span class="post-tag">' + t[a].category[0].term + "</span>";
        else e = "";
        return e;
    }
    function n(b, w, t, x) {
        if (
            w.match("mega-menu") ||
            w.match("hot-posts") ||
            w.match("feat-big") ||
            w.match("col-left") ||
            w.match("col-right") ||
            w.match("grid-small") ||
            w.match("grid-big") ||
            w.match("feat-list") ||
            w.match("post-list") ||
            w.match("related")
        ) {
            var a = "";
            if ("recent" == x) a = "/feeds/posts/default?alt=json-in-script&max-results=" + t;
            else if ("random" == x) a = "/feeds/posts/default?max-results=" + t + "&start-index=" + (Math.floor(Math.random() * t) + 1) + "&alt=json-in-script";
            else a = "/feeds/posts/default/-/" + x + "?alt=json-in-script&max-results=" + t;
            $.ajax({
                url: a,
                type: "get",
                dataType: "jsonp",
                beforeSend: function () {
                    w.match("hot-posts") && b.html('<div class="hot-loader"/>').parent().addClass("show-hot");
                },
                success: function (t) {
                    if (w.match("mega-menu")) var a = '<ul class="mega-menu-inner">';
                    else if (w.match("hot-posts")) a = '<ul class="hot-posts">';
                    else if (w.match("feat-big")) a = '<ul class="feat-big">';
                    else if (w.match("col-right") || w.match("col-left")) a = '<ul class="feat-col">';
                    else if (w.match("grid-small")) a = '<ul class="grid-small">';
                    else if (w.match("grid-big")) a = '<ul class="grid-big">';
                    else if (w.match("feat-list")) a = '<ul class="feat-list">';
                    else if (w.match("post-list")) a = '<ul class="custom-widget">';
                    else if (w.match("related")) a = '<ul class="related-posts">';
                    var e,
                        s,
                        i,
                        l,
                        n,
                        o = t.feed.entry;
                    if (null != o) {
                        for (var c = 0, r = o; c < r.length; c++) {
                            var m = k(r, c),
                                h = '<a href="' + m + '">' + r[c].title.$t + "</a>",
                                d = y(r, c),
                                p = C(r, c),
                                f = '<span class="post-author">' + r[c].author[0].name.$t + " </span>",
                                u =
                                    ((s = void 0),
                                    (s = r[c].published.$t),
                                    (i = s.substring(0, 4)),
                                    (l = s.substring(5, 7)),
                                    (n = s.substring(8, 10)),
                                    '<span class="post-date">' + monthFormat[parseInt(l, 10) - 1] + " " + n + ", " + i + "</span>"),
                                g = (void 0, (e = r[c].content.$t), '<p class="post-snippet">' + $("<div>").html(e).text().trim().substr(0, 86) + "…</p>"),
                                z = '<div class="jump-link"> <a href="' +
                                      m +
                                      '">عرض المزيد</a></div>',

                                v = "";
                            w.match("mega-menu")
                                ? (v +=
                                      '<div class="mega-item item-' +
                                      c +
                                      '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' +
                                      m +
                                      '">' +
                                      d[1] +
                                      '</a></div><h2 class="post-title">' +
                                      h +
                                      '</h2><div class="post-meta">' +
                                      u +
                                      "</div></div></div>")
                                : w.match("hot-posts")
                                ? (v +=
                                      0 == c
                                          ? '<li class="hot-item item-' +
                                            c +
                                            '"><div class="hot-item-inner"><a class="post-image-link" href="' +
                                            m +
                                            '">' +
                                            d[0] +
                                            '</a><div class="post-info">' +
                                            p +
                                            '<h2 class="post-title">' +
                                            h +
                                            '</h2><div class="post-meta">' +
                                            f +
                                            u +
                                            "</div></div></div></li>"
                                          : '<li class="hot-item item-' +
                                            c +
                                            '"><div class="hot-item-inner"><a class="post-image-link" href="' +
                                            m +
                                            '">' +
                                            d[0] +
                                            '</a><div class="post-info">' +
                                            p +
                                            '<h2 class="post-title">' +
                                            h +
                                            '</h2><div class="post-meta">' +
                                            u +
                                            "</div></div></div></li>")
                                : w.match("feat-big")
                                ? (v +=
                                      0 == c
                                          ? '<li class="feat-item item-big item-' +
                                            c +
                                            '"><div class="feat-inner"><a class="post-image-link" href="' +
                                            m +
                                            '">' +
                                            d[0] +
                                            "</a>" +
                                            p +
                                            '<div class="post-info"><h2 class="post-title">' +
                                            h +
                                            '</h2><div class="post-meta">' +
                                            f +
                                            u +
                                            "</div>" +
                                            g +
                                            "</div></div></li>"
                                          : '<li class="feat-item item-small item-' +
                                            c +
                                            '"><a class="post-image-link" href="' +
                                            m +
                                            '">' +
                                            d[1] +
                                            '</a><div class="post-info"><h2 class="post-title">' +
                                            h +
                                            '</h2><div class="post-meta">' +
                                            u +
                                            "</div></div></li>")
                                : w.match("col-left") || w.match("col-right")
                                ? (v +=
                                      0 == c
                                          ? '<li class="feat-item item-big item-' +
                                            c +
                                            '"><div class="feat-inner"><a class="post-image-link" href="' +
                                            m +
                                            '">' +
                                            d[0] +
                                            "</a>" +
                                            p +
                                            '<div class="post-info"><h2 class="post-title">' +
                                            h +
                                            '</h2><div class="post-meta">' +
                                            f +
                                            u +
                                            "</div>" +
                                            g +
                                            "</div></div></li>"
                                          : '<li class="feat-item item-small item-' +
                                            c +
                                            '"><a class="post-image-link" href="' +
                                            m +
                                            '">' +
                                            d[2] +
                                            '</a><div class="post-info"><h2 class="post-title">' +
                                            h +
                                            '</h2><div class="post-meta">' +
                                            u +
                                            "</div></div></li>")
                                : w.match("grid-small")
                                ? (v +=
                                      '<li class="feat-item item-small item-' +
                                      c +
                                      '"><a class="post-image-link" href="' +
                                      m +
                                      '">' +
                                      d[1] +
                                      '</a><div class="post-info"><h2 class="post-title">' +
                                      h +
                                      '</h2><div class="post-meta">' +
                                      u +
                                      "</div></div></li>")
                                : w.match("grid-big")
                                ? (v +=
                                      '<li class="feat-item item-big item-' +
                                      c +
                                      '"><div class="feat-inner"><a class="post-image-link" href="' +
                                      m +
                                      '">' +
                                      d[0] +
                                      "</a>" +
                                      p +
                                      '<div class="post-info"><h2 class="post-title">' +
                                      h +
                                      '</h2><div class="post-meta">' +
                                      f +
                                      u +
                                      "</div>" +
                                      g +
                                      "</div></div></li>")
                                : w.match("feat-list")
                                ? (v +=
                                      '<li class="feat-item item-' +
                                      c +
                                      '"><div class="feat-inner"><a class="post-image-link" href="' +
                                      m +
                                      '">' +
                                      d[0] +
                                      "</a>" +
                                      p +
                                      '<div class="post-info"><h2 class="post-title">' +
                                      h +
                                      '</h2><div class="post-meta">' +
                                      f +
                                      u +
                                      "</div>" +
                                      g +
                                      z +
                                      "</div></div></li>")
                                : w.match("post-list")
                                ? (v += '<li class="item-' + c + '"><a class="post-image-link" href="' + m + '">' + d[2] + '</a><h2 class="post-title">' + h + '</h2><div class="post-meta">' + u + "</div></div></li>")
                                : w.match("related") &&
                                  (v += '<li class="related-item item-' + c + '"><a class="post-image-link" href="' + m + '">' + d[1] + '</a><h2 class="post-title">' + h + '</h2><div class="post-meta">' + u + "</div></li>"),
                                (a += v);
                        }
                        a += "</ul>";
                    } else a = '<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown-o"/></ul>';
                    w.match("mega-menu")
                        ? (b.addClass("has-sub mega-menu").append(a),
                          b.find("a:first").attr("href", function (t, a) {
                              return (a = "recent" == x || "random" == x ? a.replace(a, "/search/?&max-results=" + postPerPage) : a.replace(a, "/search/label/" + x + "?&max-results=" + postPerPage));
                          }))
                        : w.match("hot-posts")
                        ? b.html(a).parent().addClass("show-hot")
                        : w.match("feat-big") || w.match("feat-list") || w.match("col-left") || w.match("col-right") || w.match("grid-small") || w.match("grid-big")
                        ? (b
                              .parent()
                              .find(".widget-title")
                              .append('<a class="view-all" href="/search/label/' + x + "?&max-results=" + postPerPage + '">' + messages.viewAll + "</a>"),
                          (w.match("col-left") || w.match("col-right")) && (w.match("col-right") && b.parent().addClass("col-right"), b.parent().addClass("col-width")),
                          b.html(a).parent().addClass("show-widget"))
                        : b.html(a);
                },
            });
        }
    }
    $("#main-menu").each(function () {
        for (var t = $(this).find(".LinkList ul > li").children("a"), a = t.length, e = 0; e < a; e++) {
            var s = t.eq(e),
                i = s.text();
            if ("_" !== i.charAt(0))
                if (
                    "_" ===
                    t
                        .eq(e + 1)
                        .text()
                        .charAt(0)
                ) {
                    var l = s.parent();
                    l.append('<ul class="sub-menu m-sub"/>');
                }
            "_" === i.charAt(0) && (s.text(i.replace("_", "")), s.parent().appendTo(l.children(".sub-menu")));
        }
        for (e = 0; e < a; e++) {
            var n = t.eq(e),
                o = n.text();
            if ("_" !== o.charAt(0))
                if (
                    "_" ===
                    t
                        .eq(e + 1)
                        .text()
                        .charAt(0)
                ) {
                    var c = n.parent();
                    c.append('<ul class="sub-menu2 m-sub"/>');
                }
            "_" === o.charAt(0) && (n.text(o.replace("_", "")), n.parent().appendTo(c.children(".sub-menu2")));
        }
        $("#main-menu ul li ul").parent("li").addClass("has-sub"), $("#main-menu .widget").addClass("show-menu");
    }),
        $("#main-menu-nav").clone().appendTo(".mobile-menu"),
        $(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),
        $(".mobile-menu ul > li a").each(function () {
            var t = $(this),
                a = t.attr("href").trim(),
                e = a.toLowerCase(),
                s = a.split("/")[0];
            e.match("mega-menu") && t.attr("href", "/search/label/" + s + "?&max-results=" + postPerPage);
        }),
        $(".slide-menu-toggle").on("click", function () {
            $("body").toggleClass("nav-active"), $(".overlay").fadeToggle(170);
        }),
        $(".mobile-menu ul li .submenu-toggle").on("click", function (t) {
            $(this).parent().hasClass("has-sub") &&
                (t.preventDefault(), $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170));
        }),
        $(".show-search, .show-mobile-search").on("click", function () {
            $("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus();
        }),
        $(".hide-search, .hide-mobile-search").on("click", function () {
            $("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur();
        }),
        $(".Label a, a.b-label").attr("href", function (t, a) {
            return a.replace(a, a + "?&max-results=" + postPerPage);
        }),
        $(".avatar-image-container img").attr("src", function (t, a) {
            return (a = (a = a.replace("/s35-c/", "/s45-c/")).replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png"));
        }),
        $(".index-post .post-image-link img").attr("src", function (t, a) {
            return (a = a.replace("https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png", noThumbnail));
        }),
        $(".author-description a").each(function () {
            $(this).attr("target", "_blank");
        }),
        $(".post-nav").each(function () {
            var t = $("a.prev-post-link").attr("href"),
                a = $("a.next-post-link").attr("href");
            $.ajax({
                url: t,
                type: "get",
                success: function (t) {
                    var a = $(t).find(".blog-post h1.post-title").text();
                    $(".post-prev a .post-nav-inner p").text(a);
                },
            }),
                $.ajax({
                    url: a,
                    type: "get",
                    success: function (t) {
                        var a = $(t).find(".blog-post h1.post-title").text();
                        $(".post-next a .post-nav-inner p").text(a);
                    },
                });
        }),
        $(".post-body strike").each(function () {
            var t = $(this),
                a = t.text();
            a.match("left-sidebar") && t.replaceWith("<style>.item #main-wrapper{float:right;padding:0 0 0 25px}.item #sidebar-wrapper{float:left}</style>"),
                a.match("right-sidebar") && t.replaceWith("<style>.item #main-wrapper{float:left;padding:0 25px 0 0}.item #sidebar-wrapper{float:right}</style>"),
                a.match("full-width") && t.replaceWith("<style>.item #main-wrapper{width:100%;padding:0}.item #sidebar-wrapper{display:none}</style>");
        }),
        $("#main-wrapper, #sidebar-wrapper").each(function () {
            1 == fixedSidebar && $(this).theiaStickySidebar({ additionalMarginTop: 25, additionalMarginBottom: 25 });
        }),
        $(".back-top").each(function () {
            var t = $(this);
            $(window).on("scroll", function () {
                100 <= $(this).scrollTop() ? t.fadeIn(250) : t.fadeOut(250);
            }),
                t.click(function () {
                    $("html, body").animate({ scrollTop: 0 }, 500);
                });
        }),
        $("#main-menu #main-menu-nav li").each(function () {
            var t = $(this),
                a = t.find("a").attr("href").trim();
            n(t, a.toLowerCase(), 4, a.split("/")[0]);
        }),
        $("#hot-section .widget-content").each(function () {
            var t = $(this),
                a = t.text().trim();
            n(t, a.toLowerCase(), 4, a.split("/")[0]);
        }),
        $(".featured-posts .widget-content").each(function () {
            var t = $(this),
                a = t.text().trim(),
                e = a.toLowerCase(),
                s = a.split("/");
            if (e.match("feat-big"))
                var i = 4,
                    l = s[0];
            else (i = s[0]), (l = s[1]);
            n(t, e, i, l);
        }),
        $(".common-widget .widget-content").each(function () {
            var t = $(this),
                a = t.text().trim(),
                e = a.toLowerCase(),
                s = a.split("/");
            n(t, e, s[0], s[1]);
        }),
        $(".related-ready").each(function () {
            var t = $(this);
            n(t, "related", 3, t.find(".related-tag").data("label"));
        }),
        $(".blog-post-comments").each(function () {
            var t,
                a = commentsSystem,
                e = (disqus_blogger_current_url, '<div class="fb-comments" data-width="100%" data-href="' + $(location).attr("href") + '" data-numposts="5"></div>'),
                s = "comments-system-" + a;
            "blogger" == a
                ? $(this).addClass(s).show()
                : "disqus" == a
                ? (((t = document.createElement("script")).type = "text/javascript"),
                  (t.async = !0),
                  (t.src = "//" + disqusShortname + ".disqus.com/embed.js"),
                  (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t),
                  $("#comments, #gpluscomments").remove(),
                  $(this).append('<div id="disqus_thread"/>').addClass(s).show())
                : "facebook" == a
                ? ($("#comments, #gpluscomments").remove(), $(this).append(e).addClass(s).show())
                : "hide" == a
                ? $(this).hide()
                : $(this).addClass("comments-system-default").show();
        });
});
