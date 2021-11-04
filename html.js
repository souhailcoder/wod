   // replaceText - Post Layouts - Contact from
var s = "[full-width]";
var o = "[left-sidebar]";
var u = "[right-sidebar]";
var c = "[contact-form]";
var li = "[line]";
var fa = "[favorite]";
$( ".post *" ).replaceText( s, "<style>#content-wrapper{width:100% !important;float:none!important;}.post-footer-line>* {margin-right: 0 !important;}#sidebar-wrapper{display:none;}</style>" );
$( ".post-body *" ).replaceText( o, "<style>#content-wrapper{float:right!important;}#sidebar-wrapper{float:left!important;}}</style>" );
$( ".post-body *" ).replaceText( u, "<style>#content-wrapper{float:left!important;}#sidebar-wrapper{float:right!important;}}</style>" );
$( ".post-body *" ).replaceText( c, "<div class='blogger-items-contact'></div>" );
$( ".post-body *" ).replaceText( li, "<div class='line'></div>" );
$( ".post-body *" ).replaceText( fa, "<style>.post-cover-thumb{display: block !important;}</style>" );

// This is function to activate Swiper Plugin
$( document ).ready( function() {
	var mySwiper = new Swiper( '.swiper-container', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		loop: true,
		speed: 1000,
	    effect: 'slide',
		slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
	} )
} );

// This is function to activate Secound Swiper Plugin
$( document ).ready( function() {
	var mySwiper = new Swiper( '.swiper-container-2', {
		nextButton: '.swiper-button-next-2',
		prevButton: '.swiper-button-prev-2',
		loop: true,
		speed: 1000,
	    effect: 'slide',
		slidesPerView: 4,
        spaceBetween: 10,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
	} )
} );

// This is function to activate the Instagram Lite Plugin
$(function() {
    $('.il-instagram-lite').instagramLite({
        accessToken: instaCode,
        urls: true,
        limit: 6,
        captions: false,
        likes: true,
        comments_count: true,
        success: function() {
            console.log('The request was successful!');
        },
        error: function(errorCode, errorMessage) {
            console.log('There was an error with the request');
        }
    });
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

//Click event to scroll to top
$('.scrollToTop span').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 800);
	return false;
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

// Post format icons
$(document).ready(function() {
	$(".post-outer").each(function() {
		var t = $(this),
			i = t.find(".post-url").attr("data-url");
		$.get(i, function(i) {
			$(i).find('.post-body iframe[src*="youtube.com"]').length && t.find(
					".post-thumb").after(
					'<div class="post-format"><i id="youtube-icon" class="fa fa-youtube-play"></i></div>'
				),
				$(i).find('.post-body iframe[src*="google.com/maps"]').length && t.find(
					".post-thumb").after(
					'<div class="post-format"><i id="map-icon" class="fa fa-map-marker"></i></div>'
				),
				$(i).find('.post-body iframe[src*="player.vimeo.com"]').length && t.find(
					".post-thumb").after(
					'<div class="post-format"><i id="vi" class="fa fa-vimeo-square"></i><div>'
				),
				$(i).find('.post-body iframe[src*="w.soundcloud.com"]').length && t.find(
					".post-thumb").after(
					'<div class="post-format"><i id="su" class="fa fa-soundcloud"></i></div>'
				),
				$(i).find(".post-body .twitter-tweet").length && (t.find(
					".post-thumb").after(
					'<div class="post-format"><i id="tw" class="fa fa-twitter"></i></div>'
				), t.find(".post-type-twitter").html($(i).find(
					".post-body .twitter-tweet"))),
				$(i).find(".post-body .instagram-media").length && (t.find(
					".post-thumb").after(
					'<div class="post-format"><i id="ins" class="fa fa-instagram"></i></div>'
				), t.find(".post-type-instagram").html($(i).find(
					".post-body .instagram-media")))
		}, "html")
	})
}),
// This is function to activate post summary
! function(t) {
	t(".data-snippet").each(function() {
		var a = t(this);
		t("body").hasClass("blog-classic") ? t.get(a.attr("data-post"), function(e) {
			a.html("<span>" + t(e).find(".post-body").text().substr(0, 350) +
				" ...</span>")
		}, "html") : t.get(a.attr("data-post"), function(e) {
			a.html("<span>" + t(e).find(".post-body").text().substr(0, 350) +
				" ...</span>")
		}, "html")
	})
}(jQuery), $(".post-thumb a").attr("style", function(t, a) {
	return a.replace("/s72-c", "/s1600")
});


// Advanced Post Pagination 
$(document).ready(function() {
	(function(e) {
		var t = e("a.newer-link");
		var n = e("a.older-link");
		e.get(t.attr("href"), function(n) {
			t.html(
				'<strong>الموضوع السابق <i class="fa fa-angle-right"></i></strong><br/><div class="post-pager-title"><span>' +
				e(n).find(".post .post-title").text() + '</span></div>')
		}, "html");
		e.get(n.attr("href"), function(t) {
			n.html(
				'<strong><i class="fa fa-angle-left"></i>الموضوع التالي </strong><br/><div class="post-pager-title"><span>' +
				e(t).find(".post .post-title").text() + '</span></div>')
		}, "html")
	})(jQuery)
});

// Optimize Images
$('.post-thumb a').attr('style', function(i, src) {
  return src.replace('/s72-c', '/s1600');
});
$('.post-thumb a').attr('style', function(i, src) {
  return src.replace('/default.jpg', '/hqdefault.jpg');
});
$('.slider_thumb').attr('src', function(i, src) {
	return src.replace('s72-c', 's1600');
});
$('.slider_thumb').attr('src', function(i, src) {
	return src.replace('default.jpg', 'mqdefault.jpg');
});
$(".post-cover-thumb img").attr('src', function(i, src) {
    return src.replace('w72-h72', 'w345-h180');
});
$('.post-cover-thumb img').attr('src', function(i, src) {
  return src.replace('/default.jpg', '/hqdefault.jpg');
});
$(".PopularPosts img").attr('src', function(i, src) {
    return src.replace('w72-h72', 'w345-h180');
});
$('.related-item img').attr('src', function(i, src) {
  return src.replace('/default.jpg', '/hqdefault.jpg');
});
$('.related-thumbnail img').attr('src', function(i, src) {
  return src.replace('/default.jpg', '/hqdefault.jpg');
});
$(".avatar-image-container img").attr('src', function(i, src) {
    return src.replace('//img1.blogblog.com/img/blank.gif',
        '//3.bp.blogspot.com/-fgwrcZWeRrU/V26tvNcGtsI/AAAAAAAAAG4/lGwGnQDZsNY7bAPr8hVorZruD-jHHxxOgCLcB/s50/anonyme.png'
    );
});
// Add widget title on Sidebar
$(".sidebar .widget h2").wrap("<div class='widget-title'/>");

// Add envelope icon to FollowByEmail Widget
$(".FollowByEmail .widget-content").after("<div class='email-icon'><i class='fa fa-envelope'/></div>");

// Contact From
$('.ContactForm').appendTo('.blogger-items-contact')

// Wrap Elements for Popular Posts Sidebar Widget
$('.popular-posts li').each(function() {
    $(this).find(".item-title, .item-snippet").wrapAll(
        '<div class="item-caption" />');
});


// This is function to activate Custom Whatsapp Button
$( document ).ready( function() {
	$( document ).on( "click", '.whatsapp-send', function() {
		if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
			var text = $( this ).attr( "data-text" );
			var url = $( this ).attr( "data-href" );
			var message = encodeURIComponent( text ) + " - " + encodeURIComponent( url );
			var whatsapp_url = "whatsapp://send?text=" + message;
			window.location.href = whatsapp_url;
		} else {
            $( ".error-message" ).fadeIn(500).delay( 3500 );
			$( ".error-message" ).fadeOut("slow");
		}
	} );
} );
