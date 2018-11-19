
$(document).ready(function()
{
   if($("#blogID").attr("blogID")!="5665035980445381266" ) 
 {
   window.location.href="https://www.facebook.com/Taaalam";
 }
    });
    
// replaceText - Post Layouts - Contact from
var recentp = "[recent]";
var randomp = "[random]";
var rc = "[recent-comments]";
var s = "[full-width]";
var o = "[left-sidebar]";
var u = "[right-sidebar]";
var c = "[contact-form]";
var li = "[line]";
$( ".post *" ).replaceText( s, "<style>#content-wrapper{width:100% !important;float:none!important;}.post-footer-line>* {margin-right: 0 !important;}#sidebar-wrapper{display:none;}</style>" );
$( ".post-body *" ).replaceText( o, "<style>#content-wrapper{float:right!important;}#sidebar-wrapper{float:left!important;}}</style>" );
$( ".post-body *" ).replaceText( u, "<style>#content-wrapper{float:left!important;}#sidebar-wrapper{float:right!important;}}</style>" );
$( ".post-body *" ).replaceText( c, "<div class='blogger-items-contact'></div>" );
$( ".post-body *" ).replaceText( li, "<div class='line'></div>" );
$( ".sidebar *, .footer *" ).replaceText( recentp, "<div id='recent-posts'></div>" );
$( ".sidebar *, .footer *" ).replaceText( randomp, "<div id='random-posts'></div>" );
$( ".sidebar *, .footer *" ).replaceText( rc, "<div id='recent-comments'></div>" );
$.ajax({
    url: '/feeds/posts/default?alt=json-in-script&max-results=4&callback=?',
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
        var posturl = "";
        var htmlcode = '<ul>';
        for (var i = 0; i < data.feed.entry.length; i++) {
                for (var j=0; j < data.feed.entry[i].link.length; j++)
                {
                     if (data.feed.entry[i].link[j].rel == "alternate")
                        {
                            posturl = data.feed.entry[i].link[j].href;
                            break;
                         }
                 }
            var posttitle = data.feed.entry[i].title.$t;
        var postThumb = " ";
        var date = data.feed.entry[i].published.$t;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var day = date.split("-")[2].substring(0, 2);
        var m = date.split("-")[1];
        var year = date.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
          if (parseInt(m) == month[u2]) {
            m = month2[u2];
            break;
          }
        }
        date = m + ' ' + day + ', ' + year;
        try {
          postThumb = data.feed.entry[i].media$thumbnail.url;
        } catch (nl) {
          postThumb = "http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png";
        }
            htmlcode += '<li><div class="recent-outer"><div class="recent-thumb"><a href="' + posturl + '"><img src="' + postThumb.replace('/s72-c/', '/w85-h75-p-k-nu/') + '"/></a></div><div class="recent-content"><div class="recent-title"><a href="' + posturl + '">' + posttitle + '</a></div></div></div></li>';
        }
        htmlcode += '</ul>';
        document.getElementById('recent-posts').innerHTML = htmlcode;
    }
});
$.ajax({
  url: '/feeds/comments/default?alt=json-in-script&max-results=4',
  type: 'get',
  dataType: "jsonp",
  success: function(data) {
    var posturl = "";
    var htmlcode = '<ul>';
    for (var i = 0; i < data.feed.entry.length; i++) {
      for (var j = 0; j < data.feed.entry[i].link.length; j++) {
        if (data.feed.entry[i].link[j].rel == "alternate") {
          posturl = data.feed.entry[i].link[j].href;
          break;
        }
      }
      var posttitle = data.feed.entry[i].title.$t;
      var author = data.feed.entry[i].author[0].name.$t;
      var commentsThumb = data.feed.entry[i].author[0].gd$image.src;
      if ("content" in data.feed.entry[i]) {
        var content = data.feed.entry[i].content.$t;
      } else if ("summary" in b_rc) {
        var content = data.feed.entry[i].summary.$t;
      } else var content = "";
      var re = /<\S[^>]*>/g;
      content = content.replace(re, "");
      if (content.length > 90) {
        content = '' + content.substring(0, 70) + '...';
      }
      if (commentsThumb.match('http://img1.blogblog.com/img/blank.gif')) {
        var thumbComments = '<div class="avatar-comments-image"><img src="http://i.imgur.com/EUs1nSg.png"/></div>';
      } else {
        if (commentsThumb.match('http://img2.blogblog.com/img/b16-rounded.gif')) {
          var thumbComments = '<div class="avatar-comments-image"><img src="http://i.imgur.com/EUs1nSg.png"/></div>';
        } else {
          var thumbComments = '<div class="avatar-comments-image"><img src="' + commentsThumb.replace('/s512-c/', '/s75-c/') + '"/></div>';
        }
      };
      htmlcode += '<li><div class="recent-outer"><div class="recent-thumb"><a href="' + posturl + '">' + thumbComments + '</div><div class="recent-content"><div class="recent-title"><a href="' + posturl + '"><i class="lnr lnr-user" aria-hidden="true"></i>' + author + '</a></div><span class="comment-content">' + content + '</span></div></div></li>';
    }
    htmlcode += '</ul>';
    document.getElementById('recent-comments').innerHTML = htmlcode;
  }
});

// This is function to activate SelectNav Plugin
$(document).ready(function() {
    selectnav('nav1');
    selectnav('nav2');
    selectnav('nav3');
});

// This is function to activate the Sticky Sidebar Plugin
jQuery(document).ready(function() {
  jQuery('#sidebar-wrapper').theiaStickySidebar({
    // Settings
    additionalMarginTop: 20,
    additionalMarginBottom: 20
  });
});


//Click event to search button
$(".search-button a, .fixed-search").click(function() {
	return $(".search-box-overlay").addClass("search-box-overlay-show"), !1
}), $(".search-box-close").click(function() {
	return $(".search-box-overlay").removeClass("search-box-overlay-show"), !1
}), $(document).click(function(e) {
	return $(e.target).closest(".search-box-wrapper").length > 0 ? !0 : void $(
		".search-box-overlay").removeClass("search-box-overlay-show")
});

