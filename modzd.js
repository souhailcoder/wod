! function(n) {
    n.fn.simpleTab = function(r) {
        return r = jQuery.extend({
            active: 1,
            fx: null,
            showSpeed: 400,
            hideSpeed: 400,
            showEasing: null,
            hideEasing: null,
            show: function() {},
            hide: function() {},
            change: function() {}
        }, r), this.each(function() {
            var t = n(this),
                a = t.children("[data-tab]"),
                e = r.active - 1;
            t.addClass("simpleTab").prepend('<ul class="tab-wrapper"></ul>'), a.addClass("tab-content").each(function() {
                n(this).hide(), t.find(".tab-wrapper").append('<li><a href="#">' + n(this).data("tab") + "</a></li>")
            }).eq(e).show(), t.find(".tab-wrapper a").on("click", function() {
                var e = n(this).parent().index();
                return n(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab"), n(this).addClass("activeTab"), "slide" == r.fx ? a.eq(e).is(":hidden") && a.slideUp(r.hideSpeed, r.hideEasing, function() {
                    r.hide.call(t)
                }).eq(e).slideDown(r.showSpeed, r.showEasing, function() {
                    r.show.call(t)
                }) : "fade" == r.fx ? a.eq(e).is(":hidden") && a.hide().eq(e).fadeIn(r.showSpeed, r.showEasing, function() {
                    r.show.call(t)
                }) : "fancyslide" == r.fx ? a.eq(e).is(":hidden") && a.slideUp(r.hideSpeed, r.hideEasing, function() {
                    r.hide.call(t)
                }).eq(e).delay(r.hideSpeed).slideDown(r.showSpeed, r.showEasing, function() {
                    r.show.call(t)
                }) : a.eq(e).is(":hidden") && a.hide().eq(e).show(), r.change.call(t), !1
            }).eq(e).addClass("activeTab")
        })
    }
}(jQuery),
function() {
    for (var e = document.getElementsByTagName("pre"), t = e.length, a = 0; a < t; a++) {
        e[a].innerHTML = '<span class="line-number"></span>' + e[a].innerHTML + '<span class="cl"></span>';
        for (var r = e[a].innerHTML.split(/\n/).length, n = 0; n < r; n++) {
            e[a].getElementsByTagName("span")[0].innerHTML += "<span>" + (n + 1) + "</span>"
        }
    }
}(), $(document).ready(function() {
    $("#contact").appendTo(".contact-form"), $(".contact-form #contact").css("display", "block"), $(".post-tabs").simpleTab({
        active: 1,
        fx: "fade",
        showSpeed: 400,
        hideSpeed: 400
    })
}), $(".intro .widget-content").each(function() {
    var e = $(this).text();
    e.match("random") && $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            var t = e.feed.entry.length - 3,
                a = Math.floor(Math.random() * (t - 0 + 1)) + 0;
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&start-index=" + a + "&max-results=3",
                type: "get",
                dataType: "jsonp",
                success: function(e) {
                    for (var t = "", a = "<ul>", r = 0; r < e.feed.entry.length; r++) {
                        for (var n = 0; n < e.feed.entry[r].link.length; n++)
                            if ("alternate" == e.feed.entry[r].link[n].rel) {
                                t = e.feed.entry[r].link[n].href;
                                break
                            }
                        var s = e.feed.entry[r].title.$t,
                            i = e.feed.entry[r].author[0].name.$t,
                            c = e.feed.entry[r].published.$t.substring(0, 10),
                            l = e.feed.entry[r].category[0].term,
                            o = e.feed.entry[r].content.$t,
                            d = $("<div>").html(o).find("img:first").attr("src"),
                            h = e.feed.entry[r].media$thumbnail.url;
                        if (void 0 === d) var p = '<a class="rcp-thumb" href="' + t + '" style="background:url(' + h + ') no-repeat center center;background-size: cover"/>';
                        else p = '<a class="rcp-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                        a += '<li><a href="/search/label/' + l + '" class="post-tag">' + l + "</a>" + p + '<div class="post-panel"><h3 class="hln-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + "</span></div></li>"
                    }
                    a += '<div class="clear"/></ul>', $(".intro .widget-content").each(function() {
                        $(this).text().match("random") && ($(this).html(a), $(this).removeClass("widget-content").addClass("layout-content"), $(".intro-loader").remove(), $(this).find(".rcp-thumb").each(function() {
                            $(this).attr("style", function(e, t) {
                                return t.replace("/default.jpg", "/mqdefault.jpg")
                            }).attr("style", function(e, t) {
                                return t.replace("s72-c", "s1600")
                            })
                        }), $("p.trans").each(function() {
                            var e = $(this).text(),
                                t = $(this).attr("data-tran");
                            $("#pages-wrapper *").replaceText(e, t)
                        }))
                    })
                }
            })
        }
    }), e.match("recent") && $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&max-results=3",
                type: "get",
                dataType: "jsonp",
                success: function(e) {
                    for (var t = "", a = "<ul>", r = 0; r < e.feed.entry.length; r++) {
                        for (var n = 0; n < e.feed.entry[r].link.length; n++)
                            if ("alternate" == e.feed.entry[r].link[n].rel) {
                                t = e.feed.entry[r].link[n].href;
                                break
                            }
                        var s = e.feed.entry[r].title.$t,
                            i = e.feed.entry[r].author[0].name.$t,
                            c = e.feed.entry[r].published.$t.substring(0, 10),
                            l = e.feed.entry[r].category[0].term,
                            o = e.feed.entry[r].content.$t,
                            d = $("<div>").html(o).find("img:first").attr("src"),
                            h = e.feed.entry[r].media$thumbnail.url;
                        if (void 0 === d) var p = '<a class="rcp-thumb" href="' + t + '" style="background:url(' + h + ') no-repeat center center;background-size: cover"/>';
                        else p = '<a class="rcp-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                        a += '<li><a href="/search/label/' + l + '" class="post-tag">' + l + "</a>" + p + '<div class="post-panel"><h3 class="hln-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + "</span></div></li>"
                    }
                    a += '<div class="clear"/></ul>', $(".intro .widget-content").each(function() {
                        $(this).text().match("recent") && ($(this).html(a), $(this).removeClass("widget-content").addClass("layout-content"), $(".intro-loader").remove(), $(this).find(".rcp-thumb").each(function() {
                            $(this).attr("style", function(e, t) {
                                return t.replace("/default.jpg", "/mqdefault.jpg")
                            }).attr("style", function(e, t) {
                                return t.replace("s72-c", "s1600")
                            })
                        }), $("p.trans").each(function() {
                            var e = $(this).text(),
                                t = $(this).attr("data-tran");
                            $("#pages-wrapper *").replaceText(e, t)
                        }))
                    })
                }
            })
        }
    })
}), $(".widget-content").each(function() {
    var e = $(this).text();
    e.match("recentcomments") && $.ajax({
        url: "/feeds/comments/default?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = '<ul class="commentswidget">', r = 0; r < e.feed.entry.length && r != e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                if ("content" in e.feed.entry[r]) var s = e.feed.entry[r].content.$t;
                else if ("summary" in b_rc) s = e.feed.entry[r].summary.$t;
                else s = "";
                90 < (s = s.replace(/<\S[^>]*>/g, "")).length && (s = s.substring(0, 70) + "...");
                e.feed.entry[r].title.$t;
                var i = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].author[0].gd$image.src;
                if (c.match("http://img1.blogblog.com/img/blank.gif")) var l = '<img class="rc-img" src="http://img1.blogblog.com/img/anon36.png"/>';
                else if (c.match("http://img2.blogblog.com/img/b16-rounded.gif")) l = '<img class="rc-img" src="http://img1.blogblog.com/img/anon36.png"/>';
                else l = '<div class="avatarImage avatarRound"><img class="avatarRound" src="' + c + '"/></div>';
                a += "<li>" + l + '<a href="' + t + '">' + i + '</a><span>"' + s + '"</span></li>'
            }
            a += '</ul><div class="clear"/>', $(".widget-content").each(function() {
                $(this).text().match("recentcomments") && ($(this).html(a), $("p.trans").each(function() {
                    var e = $(this).text(),
                        t = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(e, t)
                }))
            })
        }
    }), e.match("randomposts") && $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            var t = e.feed.entry.length - 5,
                a = Math.floor(Math.random() * (t - 0 + 1)) + 0;
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&start-index=" + a + "&max-results=4",
                type: "get",
                dataType: "jsonp",
                success: function(e) {
                    for (var t = "", a = '<ul class="post-widget">', r = 0; r < e.feed.entry.length; r++) {
                        for (var n = 0; n < e.feed.entry[r].link.length; n++)
                            if ("alternate" == e.feed.entry[r].link[n].rel) {
                                t = e.feed.entry[r].link[n].href;
                                break
                            }
                        var s = e.feed.entry[r].title.$t,
                            i = e.feed.entry[r].author[0].name.$t,
                            c = e.feed.entry[r].published.$t.substring(0, 10),
                            l = (e.feed.entry[r].category[0].term, e.feed.entry[r].content.$t),
                            o = $("<div>").html(l).find("img:first").attr("src"),
                            d = e.feed.entry[r].media$thumbnail.url;
                        if (void 0 === o) var h = '<a class="rcp-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                        else h = '<a class="rcp-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>';
                        a += "<li>" + h + '<div class="post-panel"><h3 class="hln-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + "</span></div></li>"
                    }
                    a += '</ul><div class="clear"/>', $(".widget-content").each(function() {
                        $(this).text().match("randomposts") && ($(this).html(a), $(this).find(".rcp-thumb").each(function() {
                            $(this).attr("style", function(e, t) {
                                return t.replace("/default.jpg", "/mqdefault.jpg")
                            }).attr("style", function(e, t) {
                                return t.replace("s72-c", "s1600")
                            })
                        }), $("p.trans").each(function() {
                            var e = $(this).text(),
                                t = $(this).attr("data-tran");
                            $("#pages-wrapper *").replaceText(e, t)
                        }))
                    })
                }
            })
        }
    }), e.match("recentposts") && $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&max-results=4",
                type: "get",
                dataType: "jsonp",
                success: function(e) {
                    for (var t = "", a = '<ul class="post-widget">', r = 0; r < e.feed.entry.length; r++) {
                        for (var n = 0; n < e.feed.entry[r].link.length; n++)
                            if ("alternate" == e.feed.entry[r].link[n].rel) {
                                t = e.feed.entry[r].link[n].href;
                                break
                            }
                        var s = e.feed.entry[r].title.$t,
                            i = e.feed.entry[r].author[0].name.$t,
                            c = e.feed.entry[r].published.$t.substring(0, 10),
                            l = (e.feed.entry[r].category[0].term, e.feed.entry[r].content.$t),
                            o = $("<div>").html(l).find("img:first").attr("src"),
                            d = e.feed.entry[r].media$thumbnail.url;
                        if (void 0 === o) var h = '<a class="rcp-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                        else h = '<a class="rcp-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>';
                        a += "<li>" + h + '<div class="post-panel"><h3 class="hln-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + "</span></div></li>"
                    }
                    a += '</ul><div class="clear"/>', $(".widget-content").each(function() {
                        $(this).text().match("recentposts") && ($(this).html(a), $(this).find(".rcp-thumb").each(function() {
                            $(this).attr("style", function(e, t) {
                                return t.replace("/default.jpg", "/mqdefault.jpg")
                            }).attr("style", function(e, t) {
                                return t.replace("s72-c", "s1600")
                            })
                        }), $("p.trans").each(function() {
                            var e = $(this).text(),
                                t = $(this).attr("data-tran");
                            $("#pages-wrapper *").replaceText(e, t)
                        }))
                    })
                }
            })
        }
    })
}), $(".recent-layouts .widget-content").each(function() {
    var e = $(this).html(),
        u = $(this).prev("h2").text(),
        t = e.match(/[^[\]]+(?=])/g);
    $(this).html("<span>" + t[0] + "</span><span>" + t[1] + "</span><span>" + t[2] + "</span>");
    var f = $(this).text(),
        m = $(this).find("span").eq(0).text(),
        a = $(this).find("span").eq(1).text(),
        g = $(this).find("span").eq(2).text();
    a.match("fbig1") && $.ajax({
        url: "/feeds/posts/default/-/" + m + "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = "<ul>", r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].published.$t.substring(0, 10),
                    l = e.feed.entry[r].content.$t,
                    o = $("<div>").html(l).find("img:first").attr("src"),
                    d = e.feed.entry[r].media$thumbnail.url;
                if (0 == r) {
                    var h = l.replace(/<\S[^>]*>/g, "");
                    if (150 < h.length && (h = h.substring(0, 150) + "..."), void 0 === o) var p = '<a class="first-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                    else p = '<a class="first-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>'
                } else if (void 0 === o) p = '<a class="recent-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                else p = '<a class="recent-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>';
                a += 0 == r ? '<div class="first"><div class="rthumbc">' + p + '</div><div class="first-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + '</span><p class="recent-des">' + h + '<p><div class="post-readmore"><a href="' + t + '">اقرأ المزيد </a></div></div></div>' : '<li><div class="rthumbc">' + p + '</div><div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + '</span></div><div class="clear"/></li>'
            }
            a += "</ul>", $(".recent-layouts .widget-content").each(function() {
                $(this).text() == f && ($(this).html(a), $(this).parent().addClass("fbig1"), $(this).parent().addClass("fbig"), $(this).prev("h2").html('<a href="/search/label/' + m + '">' + u + "</a>"), $(this).prev("h2").css("border-color", g), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", g), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + m + '">المزيد</a>'), $(this).find(".post-readmore a").css("background", g), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }), $(this).find(".first-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var e = $(this).text(),
                        t = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(e, t)
                }))
            })
        }
    }), a.match("fbig2") && $.ajax({
        url: "/feeds/posts/default/-/" + m + "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = "<ul>", r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].published.$t.substring(0, 10),
                    l = e.feed.entry[r].content.$t,
                    o = $("<div>").html(l).find("img:first").attr("src"),
                    d = e.feed.entry[r].media$thumbnail.url;
                if (0 == r) {
                    var h = l.replace(/<\S[^>]*>/g, "");
                    if (100 < h.length && (h = h.substring(0, 100) + "..."), void 0 === o) var p = '<a class="first-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                    else p = '<a class="first-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>'
                } else if (void 0 === o) p = '<a class="recent-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                else p = '<a class="recent-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>';
                a += 0 == r ? '<div class="first"><div class="rthumbc">' + p + '</div><div class="first-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + '</span><p class="recent-des">' + h + "<p></div></div>" : '<li><div class="rthumbc">' + p + '</div><div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + '</span></div><div class="clear"/></li>'
            }
            a += "</ul>", $(".recent-layouts .widget-content").each(function() {
                $(this).text() == f && ($(this).html(a), $(this).parent().addClass("fbig2"), $(this).parent().addClass("fbig"), $(this).prev("h2").html('<a href="/search/label/' + m + '">' + u + "</a>"), $(this).prev("h2").css("border-color", g), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", g), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + m + '">المزيد</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }), $(this).find(".first-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var e = $(this).text(),
                        t = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(e, t)
                }))
            })
        }
    }), a.match("column1") && $.ajax({
        url: "/feeds/posts/default/-/" + m + "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = "<ul>", r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].published.$t.substring(0, 10),
                    l = e.feed.entry[r].content.$t,
                    o = $("<div>").html(l).find("img:first").attr("src"),
                    d = e.feed.entry[r].media$thumbnail.url;
                if (0 == r) {
                    var h = l.replace(/<\S[^>]*>/g, "");
                    if (100 < h.length && (h = h.substring(0, 100) + "..."), void 0 === o) var p = '<a class="first-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                    else p = '<a class="first-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>'
                } else if (void 0 === o) p = '<a class="recent-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                else p = '<a class="recent-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>';
                a += 0 == r ? '<div class="first"><div class="rthumbc">' + p + '</div><div class="first-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + '</span><p class="recent-des">' + h + "<p></div></div>" : '<li><div class="rthumbc">' + p + '</div><div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + '</span></div><div class="clear"/></li>'
            }
            a += "</ul>", $(".recent-layouts .widget-content").each(function() {
                $(this).text() == f && ($(this).html(a), $(this).parent().addClass("column"), $(this).parent().addClass("column1"), $(this).parent().addClass("fbig"), $(this).prev("h2").html('<a href="/search/label/' + m + '">' + u + "</a>"), $(this).prev("h2").css("border-color", g), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", g), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + m + '">المزيد</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }), $(this).find(".first-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var e = $(this).text(),
                        t = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(e, t)
                }))
            })
        }
    }), a.match("column2") && $.ajax({
        url: "/feeds/posts/default/-/" + m + "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = "<ul>", r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].published.$t.substring(0, 10),
                    l = e.feed.entry[r].content.$t,
                    o = $("<div>").html(l).find("img:first").attr("src"),
                    d = e.feed.entry[r].media$thumbnail.url;
                if (void 0 === o) var h = '<a class="recent-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                else h = '<a class="recent-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>';
                a += '<li><div class="rthumbc">' + h + '</div><div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + '</span></div><div class="clear"/></li>'
            }
            a += "</ul>", $(".recent-layouts .widget-content").each(function() {
                $(this).text() == f && ($(this).html(a), $(this).parent().addClass("column"), $(this).parent().addClass("column2"), $(this).parent().addClass("fbig"), $(this).prev("h2").html('<a href="/search/label/' + m + '">' + u + "</a>"), $(this).prev("h2").css("border-color", g), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", g), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + m + '">المزيد</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var e = $(this).text(),
                        t = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(e, t)
                }))
            })
        }
    }), a.match("list") && $.ajax({
        url: "/feeds/posts/default/-/" + m + "?alt=json-in-script&max-results=6",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = "<ul>", r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].published.$t.substring(0, 10),
                    l = e.feed.entry[r].content.$t,
                    o = $("<div>").html(l).find("img:first").attr("src"),
                    d = e.feed.entry[r].media$thumbnail.url;
                if (void 0 === o) var h = '<a class="recent-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                else h = '<a class="recent-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>';
                a += '<li><div class="rthumbc">' + h + '</div><div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + '</span></div><div class="clear"/></li>'
            }
            a += "</ul>", $(".recent-layouts .widget-content").each(function() {
                $(this).text() == f && ($(this).html(a), $(this).parent().addClass("list"), $(this).parent().addClass("fbig"), $(this).prev("h2").html('<a href="/search/label/' + m + '">' + u + "</a>"), $(this).prev("h2").css("border-color", g), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", g), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + m + '">المزيد</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var e = $(this).text(),
                        t = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(e, t)
                }))
            })
        }
    }), a.match("gallery") && $.ajax({
        url: "/feeds/posts/default/-/" + m + "?alt=json-in-script&max-results=9",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = "<ul>", r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].published.$t.substring(0, 10),
                    l = e.feed.entry[r].content.$t,
                    o = $("<div>").html(l).find("img:first").attr("src"),
                    d = e.feed.entry[r].media$thumbnail.url;
                if (void 0 === o) var h = '<a class="recent-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                else h = '<a class="recent-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>';
                a += "<li>" + h + '<div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + '</span></div><div class="clear"/></li>'
            }
            a += "</ul>", $(".recent-layouts .widget-content").each(function() {
                $(this).text() == f && ($(this).html(a), $(this).parent().addClass("gallery"), $(this).parent().addClass("recent-block"), $(this).prev("h2").html('<a href="/search/label/' + m + '">' + u + "</a>"), $(this).prev("h2").css("border-color", g), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", g), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + m + '">المزيد</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var e = $(this).text(),
                        t = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(e, t)
                }))
            })
        }
    }), a.match("videos") && $.ajax({
        url: "/feeds/posts/default/-/" + m + "?alt=json-in-script&max-results=4",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = "<ul>", r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].media$thumbnail.url,
                    l = e.feed.entry[r].published.$t.substring(0, 10);
                a += "<li>" + ('<a class="recent-thumb" href="' + t + '" style="background:url(' + c + ') no-repeat center center;background-size: cover"/>') + '<div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + l + '</span><span class="recent-author">' + i + '</span></div><div class="clear"/></li>'
            }
            a += "</ul>", $(".recent-layouts .widget-content").each(function() {
                $(this).text() == f && ($(this).html(a), $(this).parent().addClass("videos"), $(this).parent().addClass("recent-block"), $(this).prev("h2").html('<a href="/search/label/' + m + '">' + u + "</a>"), $(this).prev("h2").css("border-color", g), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", g), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + m + '">المزيد</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var e = $(this).text(),
                        t = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(e, t)
                }))
            })
        }
    }), a.match("carousel") && $.ajax({
        url: "/feeds/posts/default/-/" + m + "?alt=json-in-script&max-results=9",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = '<div class="owl-carousel carousel-items">', r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].published.$t.substring(0, 10),
                    l = e.feed.entry[r].content.$t,
                    o = $("<div>").html(l).find("img:first").attr("src"),
                    d = e.feed.entry[r].media$thumbnail.url;
                if (void 0 === o) var h = '<a class="recent-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                else h = '<a class="recent-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>';
                a += "<li>" + h + '<div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + '</span></div><div class="clear"/></li>'
            }
            a += "</div>", $(".recent-layouts .widget-content").each(function() {
                if ($(this).text() == f) {
                    $(this).html(a), $(this).parent().addClass("carousel"), $(this).parent().addClass("recent-block"), $(this).prev("h2").html('<a href="/search/label/' + m + '">' + u + "</a>"), $(this).prev("h2").css("border-color", g), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", g), $(this).removeClass("widget-content").addClass("layout-content"), $(".carousel-items").owlCarousel({
                        items: 3,
                        navigation: !0,
                        navigationText: ["", ""],
                        itemsDesktop: [1e3, 3],
                        itemsDesktopSmall: [647, 1],
                        itemsTablet: [396, 1],
                        itemsMobile: !1,
                        pagination: !1
                    });
                    var e = $(this).find(".owl-controls");
                    $(this).prev(".box-title").append(e), $(this).find(".recent-thumb").each(function() {
                        $(this).attr("style", function(e, t) {
                            return t.replace("/default.jpg", "/mqdefault.jpg")
                        }).attr("style", function(e, t) {
                            return t.replace("s72-c", "s1600")
                        })
                    }), $("p.trans").each(function() {
                        var e = $(this).text(),
                            t = $(this).attr("data-tran");
                        $("#pages-wrapper *").replaceText(e, t)
                    })
                }
            })
        }
    }), a.match("slider") && $.ajax({
        url: "/feeds/posts/default/-/" + m + "?alt=json-in-script&max-results=8",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = '<div class="slider-items owl-carousel">', r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].author[0].name.$t,
                    c = e.feed.entry[r].published.$t.substring(0, 10),
                    l = e.feed.entry[r].content.$t,
                    o = $("<div>").html(l).find("img:first").attr("src"),
                    d = e.feed.entry[r].media$thumbnail.url,
                    h = l.replace(/<\S[^>]*>/g, "");
                if (150 < h.length && (h = h.substring(0, 150) + "..."), void 0 === o) var p = '<a class="recent-thumb" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"/>';
                else p = '<a class="recent-thumb" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"/>';
                a += "<li>" + p + '<div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + s + '</a></h3><span class="recent-date">' + c + '</span><span class="recent-author">' + i + '</span><p class="recent-des">' + h + '<p></div><div class="clear"/></li>'
            }
            a += "</div>", $(".recent-layouts .widget-content").each(function() {
                $(this).text() == f && ($(this).html(a), $(this).parent().addClass("carousel"), $(this).parent().addClass("slider"), $(this).parent().addClass("recent-block"), $(this).prev("h2").remove(), $(this).prev("h2").css("border-color", g), $(this).removeClass("widget-content").addClass("layout-content"), $(".slider-items").owlCarousel({
                    items: 1,
                    navigation: !0,
                    navigationText: ["", ""],
                    itemsDesktop: [1e3, 1],
                    itemsDesktopSmall: [647, 1],
                    itemsTablet: [396, 1],
                    autoPlay: !0,
                    autoPlay: 5e3,
                    itemsMobile: !1,
                    pagination: !0
                }), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var e = $(this).text(),
                        t = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(e, t)
                }))
            })
        }
    })
}), $("#related-posts").each(function() {
    var e = $(this).html();
    $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=9",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = '<div class="rnav owl-carousel">', r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    }
                var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].content.$t,
                    c = $("<div>").html(i).find("img:first").attr("src"),
                    l = e.feed.entry[r].media$thumbnail.url;
                if (void 0 === c) var o = '<a class="rnav-img" href="' + t + '" style="background:url(' + l + ') no-repeat center center;background-size:cover"/>';
                else o = '<a class="rnav-img" href="' + t + '" style="background:url(' + c + ') no-repeat center center;background-size:cover"/>';
                a += "<li>" + o + '<div class="rnav-conent"><h3 class="rnav-title"><a href="' + t + '">' + s + "</a></h3></div></li>"
            }
            a += '</div><div class="clear"/>', $("#related-posts").html(a), $(".rnav.owl-carousel").owlCarousel({
                items: 3,
                navigation: !0,
                navigationText: ["", ""],
                itemsDesktop: [1e3, 3],
                itemsDesktopSmall: [647, 1],
                itemsTablet: [396, 1],
                itemsMobile: !1,
                pagination: !1
            }), $(".rnav-img").each(function() {
                $(this).attr("style", function(e, t) {
                    return t.replace("/default.jpg", "/mqdefault.jpg")
                }).attr("style", function(e, t) {
                    return t.replace("s72-c", "s1600")
                })
            }), $("p.trans").each(function() {
                var e = $(this).text(),
                    t = $(this).attr("data-tran");
                $("#pages-wrapper *").replaceText(e, t)
            })
        }
    })
}), $(document).ready(function() {
    $("#sidebar-wrapper .widget h2").wrap("<div class='widget-title'/>"), $("#foter-wrapper .widget h2").wrap("<div class='widget-title'/>"), $("ul#sub-menu").parent("li").addClass("hasSub"), $(".index .post-outer").each(function() {
        $(this).find(".post-thumb a").attr("style", function(e, t) {
            return t.replace("/default.jpg", "/mqdefault.jpg")
        }).attr("style", function(e, t) {
            return t.replace("s72-c", "s1600")
        })
    }), $(".share-container").each(function() {
        var e = $(this);
        e.find(".post-sharebtn").click(function() {
            e.find(".post-share").fadeToggle("slow")
        }), $(document).bind("click", function(e) {
            0 === $(e.target).parents(".share-container").length && $(".post-share").fadeOut(300)
        })
    }), $(document).ready(function(e) {
        e("abbr.timeago").timeago()
    }), $("#header-search .search-icon").click(function() {
        var e = $("#header-search input");
        return e.is(":hidden") ? (e.fadeIn(300), $(this).removeClass("icon-search"), $(this).addClass("icon-cancel"), $("#menu").hide()) : (e.fadeOut(300), $(this).removeClass("icon-cancel"), $(this).addClass("icon-search"), $("#menu").show()), !1
    }), $(document).bind("click", function(e) {
        0 === $(e.target).parents("#header-search").length && ($("#header-search input").fadeOut(300), $("#header-search .search-icn").removeClass("icon-cancel"), $("#header-search .search-icn").addClass("icon-search"), $("#menu").show())
    }), $(".menu li").each(function() {
        $(this).hoverTimeout(0, function() {
            $(this).children("ul").slideDown()
        }, 0, function() {
            $(this).children("ul").hide()
        })
    }), $(function() {
        $(".upbt").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({
                    scrollTop: e.offset().top
                }, 1e3), !1
            }
        })
    }), $(".widget-content").each(function() {
        var e = $(this).text();
        e.substr(0, 10).match("fbbox") && (e = e.replace("fbbox/", ""), $(this).html('<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//www.facebook.com/plugins/likebox.php?href=' + e + '&width=&height=258&colorscheme=light&show_faces=true&header=false&stream=false&show_border=false&appId=492409184153294" style="border:none; overflow:hidden; width:100%; height:230px;"></iframe>'))
    }), $("p.trans").each(function() {
        var e = $(this).text(),
            t = $(this).attr("data-tran");
        $("#pages-wrapper *").replaceText(e, t)
    });
    $(".menu li *").replaceText("[", '<span class="msubtitle">'), $(".menu li *").replaceText("]", "</span>"), $(".menu #nav").show(), $(".social-counter").each(function() {
        var e = $(this);
        0 === $(this).find(".social-item").length && e.remove(), $(this).find(".widget").removeClass("LinkList"), $(".social-counter .social-item.facebook").find(".item-text").text("Likes"), $(".social-counter .social-item.rss,.social-counter .social-item.youtube").find(".item-text").text("Subscribes");
        $(".social-counter *").replaceText("[", '<span class="item-count">'), $(".social-counter *").replaceText("]", "</span>"), $(".social-item").each(function() {
            var e = $(this).find(".remove-count"),
                t = $(this).find(".item-count");
            $(e).before($(t)), $(e).remove()
        })
    }), $(".contact-button a").click(function() {
        var e = $(".contact-sec");
        return e.is(":hidden") && (e.fadeIn(300), e.addClass("contact-show"), $("#outer-wrapper").addClass("pop_contact ")), !1
    }), $(document).bind("click", function(e) {
        0 === $(e.target).parents(".contact-sec").length && ($(".contact-sec").fadeOut(300), $("#outer-wrapper").removeClass("pop_contact "), $(".contact-sec").removeClass("contact-show"))
    }), $(".contact-close").click(function() {
        return $(".contact-sec").fadeOut(300), $("#outer-wrapper").removeClass("pop_contact "), $(".contact-sec").removeClass("contact-show"), !1
    });
    var e = $("#sidetabs #tabside1 .widget h2").text();
    $(".menu-tab .item-1 a").text(e);
    var t = $("#sidetabs #tabside2 .widget h2").text();
    $(".menu-tab .item-2 a").text(t);
    var a = $("#sidetabs #tabside3 .widget h2").text();
    $(".menu-tab .item-3 a").text(a), $("#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title").remove(), $(".sidetabs").tabslet({
        mouseevent: "click",
        attribute: "href",
        animation: !0
    }), 0 === $(".sidetabs .widget").length && $(".sidetabs").remove(), 0 === $(".home .post-outer").length && ($(".home #main-wrapper #main").remove(), $(".posts-title").remove()), 0 === $("#footer .widget").length && ($("#footer").remove(), $("#foter-wrapper").css("padding-bottom", "0"), $(".bottom-nav").css("margin-bottom", "0"), $(".bottom-nav").css("border-bottom", "0")), 0 === $("#ticker .widget").length && $("#ticker").remove();
    var r, n, s;
    $(".post *").replaceText("[full_width]", "<style>.item #main-wrapper{width:100% !important;float:none!important;border-right:0!important;border-left:0!important}.item #sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}</style>"), $(".post-body *").replaceText("[left_sidebar]", "<style>@media screen and (min-width: 1000px){.item #main-wrapper{float:right!important;border-left:1px solid #EEE!important;border-right:0!important}.item #sidebar-wrapper{float:left!important;padding-left:0!important;padding-right:2%!important;border-right:1px solid #EEE!important;border-left:0!important;left:1px!important}.item #main-wrapper #main{margin-left:2.85%!important;margin-right:0!important}}</style>"), $(".post-body *").replaceText("[right_sidebar]", "<style>@media screen and (min-width: 1000px){.item #main-wrapper{float:left!important;border-right:1px solid #EEE!important;border-left:0!important}.item #sidebar-wrapper{float:right!important;padding-right:0!important;padding-left:2%!important;border-left:1px solid #EEE!important;left:-1px!important;border-right:0!important}.item #main-wrapper #main{margin-right:2.85%!important;margin-left:0!important}}</style>"), r = jQuery, n = r("a.newer-link"), s = r("a.older-link"), r.get(n.attr("href"), function(e) {
        n.html('<strong>التالي <i class="fa fa-angle-double-right"></i></strong> <span>' + r(e).find(".post h1.post-title").text() + "</span>")
    }, "html"), r.get(s.attr("href"), function(e) {
        s.html('<strong><i class="fa fa-angle-double-left"></i> السابق</strong> <span>' + r(e).find(".post h1.post-title").text() + "</span>")
    }, "html")
}), $(window).bind("load", function() {
    $(".intro-loader").remove(), $("p.trans").each(function() {
        var e = $(this).text(),
            t = $(this).attr("data-tran");
        $("#pages-wrapper *").replaceText(e, t)
    })
}), $(document).ready(function() {
    var e = $(".item .ad-inside");
    $(".item .post *").replaceText("[post_ad]", '<div class="ad-inside-to"/>'), $(".ad-inside-to").append(e);
    var t = $(".post-body .ad-inside").width();
    $(".post-body .ad-inside-to").width(t)
}), $(document).ready(function() {
    $(".comments-tabs").simpleTab({
        active: 1,
        fx: "fade",
        showSpeed: 400,
        hideSpeed: 400
    }), $(".tab-blogger").append($("#comments")), $(".comments-tabs.simpleTab .tab-wrapper").wrap("<div class='comments-tabs-header'/>"), $(".comments-tabs-header").prepend("<h3>شاركنا رأيك</h3>")
})
