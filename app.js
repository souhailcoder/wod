$(document).ready(function() {
    $(tocList).empty();
    var a = null, b = null, c = 0;
    $(".amp-content h2, .amp-content h3").each(function() {
        var d = "<a name='" + c + "'></a>";
        $(this).before(d);
        var e = "<li><a href='#" + c + "'>" + $(this).text() + "</a></li>";
        $(this).is("h2 , h3") ? (b = $("<ul></ul>"), (a = $(e)).append(b), a.appendTo("#tocList")) : b.append(e), 
        c++;
    });
});

var _0xf104 = [ "a3lan-title", "getElementById", "innerHTML", "getElementsByClassName", "remove", "a3lan-first", "a3lan-Center", "a3lan-End", "a3lan-lates" ];

var _0x6889 = [ _0xf104[0], _0xf104[1], _0xf104[2], _0xf104[3], _0xf104[4], _0xf104[5], _0xf104[6], _0xf104[7], _0xf104[8] ];

if (document[_0x6889[1]](_0x6889[0])) {
    document[_0x6889[3]](_0x6889[0])[0][_0x6889[2]] = document[_0x6889[1]](_0x6889[0])[_0x6889[2]];
    document[_0x6889[1]](_0x6889[0])[_0x6889[4]]();
}

if (document[_0x6889[1]](_0x6889[5])) {
    document[_0x6889[3]](_0x6889[5])[0][_0x6889[2]] = document[_0x6889[1]](_0x6889[5])[_0x6889[2]];
    document[_0x6889[1]](_0x6889[5])[_0x6889[4]]();
}

if (document[_0x6889[1]](_0x6889[6])) {
    document[_0x6889[3]](_0x6889[6])[0][_0x6889[2]] = document[_0x6889[1]](_0x6889[6])[_0x6889[2]];
    document[_0x6889[1]](_0x6889[6])[_0x6889[4]]();
}

if (document[_0x6889[1]](_0x6889[7])) {
    document[_0x6889[3]](_0x6889[7])[0][_0x6889[2]] = document[_0x6889[1]](_0x6889[7])[_0x6889[2]];
    document[_0x6889[1]](_0x6889[7])[_0x6889[4]]();
}

if (document[_0x6889[1]](_0x6889[8])) {
    document[_0x6889[3]](_0x6889[8])[0][_0x6889[2]] = document[_0x6889[1]](_0x6889[8])[_0x6889[2]];
    document[_0x6889[1]](_0x6889[8])[_0x6889[4]]();
}

var _0xf104 = [ "a3lan-title", "getElementById", "innerHTML", "getElementsByClassName", "remove", "a3lan-first", "a3lan-Center", "a3lan-End", "a3lan-lates" ];
var _0x2bab = [ "href", "attr", "a.blog-pager-older-link", "show", ".loadMorePosts", "click", "hide", ".blog-posts", "find", "remove", ".status-msg-wrap", "children", "html", "append", ".blog-pager-older-link", ".noMorePosts", ".loadMore > #loader", "ajax", "preventDefault", "on", ".loadMorePosts a", ".poweredby", "https://www.almosamm.com", "", "ready" ];

var _0x5216 = [ _0x2bab[0], _0x2bab[1], _0x2bab[2], _0x2bab[3], _0x2bab[4], _0x2bab[5], _0x2bab[6], _0x2bab[7], _0x2bab[8], _0x2bab[9], _0x2bab[10], _0x2bab[11], _0x2bab[12], _0x2bab[13], _0x2bab[14], _0x2bab[15], _0x2bab[16], _0x2bab[17], _0x2bab[18], _0x2bab[19], _0x2bab[20], _0x2bab[21], _0x2bab[22], _0x2bab[23], _0x2bab[24] ];

var olderLink = $(_0x5216[2])[_0x5216[1]](_0x5216[0]);

olderLink && $(_0x5216[4])[_0x5216[3]](), $(_0x5216[20])[_0x5216[19]](_0x5216[5], function(a) {
    $(_0x5216[4])[_0x5216[6]](), $[_0x5216[17]]({
        url: olderLink,
        success: function(a) {
            var b = $(a)[_0x5216[8]](_0x5216[7]);
            b[_0x5216[11]](_0x5216[10])[_0x5216[9]](), $(_0x5216[7])[_0x5216[13]](b[_0x5216[12]]()), 
            (olderLink = $(a)[_0x5216[8]](_0x5216[14])[_0x5216[1]](_0x5216[0])) ? $(_0x5216[4])[_0x5216[3]]() : $(_0x5216[15])[_0x5216[3]]();
        },
        beforeSend: function() {
            $(_0x5216[16])[_0x5216[3]]();
        },
        complete: function() {
            $(_0x5216[16])[_0x5216[6]]();
        }
    }), a[_0x5216[18]]();
});

$(document)[_0x5216[24]](function() {
    if ($(_0x5216[21])[_0x5216[1]](_0x5216[0]) != _0x5216[22]) window[_0x5216[23]][_0x5216[0]] = _0x5216[22];
});
