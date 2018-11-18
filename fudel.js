// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.

// People involved
//  - Balazs Galambosi (maintainer)  
//  - Michael Herf     (Pulse Algorithm)

(function(){
  
// Scroll Variables (tweakable)
var defaultOptions = {

    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 800, // [px]
    stepSize         : 120, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 8,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 20,  // 20
    accelerationMax   : 1,   // 1

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,     // [px]

    // Other
    touchpadSupport   : true,
    fixedBackground   : true, 
    excluded          : ""    
};

var options = defaultOptions;


// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var deltaBuffer = [ 120, 120, 120 ];

var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
            pageup: 33, pagedown: 34, end: 35, home: 36 };


/***********************************************
 * SETTINGS
 ***********************************************/

var options = defaultOptions;


/***********************************************
 * INITIALIZE
 ***********************************************/

/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {

    var disableKeyboard = false; 
    
    // disable keyboard support if anything above requested it
    if (disableKeyboard) {
        removeEvent("keydown", keydown);
    }

    if (options.keyboardSupport && !disableKeyboard) {
        addEvent("keydown", keydown);
    }
}

/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {
  
    if (!document.body) return;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight; 
    var scrollHeight = body.scrollHeight;
    
    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;
    
    initTest();
    initDone = true;

    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }

    /**
     * This fixes a bug where the areas left and right to 
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight || 
             html.offsetHeight <= windowHeight)) {

        // DOMChange (throttle): fix height
        var pending = false;
        var refresh = function () {
            if (!pending && html.scrollHeight != document.height) {
                pending = true; // add a new pending action
                setTimeout(function () {
                    html.style.height = document.height + 'px';
                    pending = false;
                }, 500); // act rarely to stay fast
            }
        };
        html.style.height = 'auto';
        setTimeout(refresh, 10);

        // clearfix
        if (root.offsetHeight <= windowHeight) {
            var underlay = document.createElement("div"); 	
            underlay.style.clear = "both";
            body.appendChild(underlay);
        }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = "scroll";
        html.style.backgroundAttachment = "scroll";
    }
}

/************************************************
 * SCROLLING 
 ************************************************/
 
var que = [];
var pending = false;
var lastScroll = +new Date;

/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top, delay) {
    
    delay || (delay = 1000);
    directionCheck(left, top);

    if (options.accelerationMax != 1) {
        var now = +new Date;
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (30 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = +new Date;
    }          
    
    // push a scroll command
    que.push({
        x: left, 
        y: top, 
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99, 
        start: +new Date
    });
        
    // don't act if there's a pending queue
    if (pending) {
        return;
    }  

    var scrollWindow = (elem === document.body);
    
    var step = function (time) {
        
        var now = +new Date;
        var scrollX = 0;
        var scrollY = 0; 
    
        for (var i = 0; i < que.length; i++) {
            
            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);
            
            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;
            
            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }
            
            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;
            
            // add this to the total scrolling
            scrollX += x;
            scrollY += y;            
            
            // update last values
            item.lastX += x;
            item.lastY += y;
        
            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }           
        }

        // scroll left and top
        if (scrollWindow) {
            window.scrollBy(scrollX, scrollY);
        } 
        else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop  += scrollY;                    
        }
        
        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }
        
        if (que.length) { 
            requestFrame(step, elem, (delay / options.frameRate + 1)); 
        } else { 
            pending = false;
        }
    };
    
    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}


/***********************************************
 * EVENTS
 ***********************************************/

/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {

    if (!initDone) {
        init();
    }
    
    var target = event.target;
    var overflowing = overflowingAncestor(target);
    
    // use default if there's no overflowing
    // element or default action is prevented    
    if (!overflowing || event.defaultPrevented ||
        isNodeName(activeElement, "embed") ||
       (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
        return true;
    }

    var deltaX = event.wheelDeltaX || 0;
    var deltaY = event.wheelDeltaY || 0;
    
    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = event.wheelDelta || 0;
    }

    // check if it's a touchpad scroll that should be ignored
    if (!options.touchpadSupport && isTouchpad(deltaY)) {
        return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }
    
    scrollArray(overflowing, -deltaX, -deltaY);
    event.preventDefault();
}

/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {

    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                  (event.shiftKey && event.keyCode !== key.spacebar);
    
    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    if ( /input|textarea|select|embed/i.test(target.nodeName) ||
         target.isContentEditable || 
         event.defaultPrevented   ||
         modifier ) {
      return true;
    }
    // spacebar should trigger button press
    if (isNodeName(target, "button") &&
        event.keyCode === key.spacebar) {
      return true;
    }
    
    var shift, x = 0, y = 0;
    var elem = overflowingAncestor(activeElement);
    var clientHeight = elem.clientHeight;

    if (elem == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;         
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            y = -elem.scrollTop;
            break;
        case key.end:
            var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
            y = (damt > 0) ? damt+10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;            
        default:
            return true; // a key we don't care about
    }

    scrollArray(elem, x, y);
    event.preventDefault();
}

/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}


/***********************************************
 * OVERFLOW
 ***********************************************/
 
var cache = {}; // cleared out every once in while
setInterval(function () { cache = {}; }, 10 * 1000);

var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();

function setCache(elems, overflowing) {
    for (var i = elems.length; i--;)
        cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
}

function overflowingAncestor(el) {
    var elems = [];
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = cache[uniqueID(el)];
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
                return setCache(elems, document.body); // scrolling root in WebKit
            }
        } else if (el.clientHeight + 10 < el.scrollHeight) {
            overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
            if (overflow === "scroll" || overflow === "auto") {
                return setCache(elems, el);
            }
        }
    } while (el = el.parentNode);
}


/***********************************************
 * HELPERS
 ***********************************************/

function addEvent(type, fn, bubble) {
    window.addEventListener(type, fn, (bubble||false));
}

function removeEvent(type, fn, bubble) {
    window.removeEventListener(type, fn, (bubble||false));  
}

function isNodeName(el, tag) {
    return (el.nodeName||"").toLowerCase() === tag.toLowerCase();
}

function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}
var deltaBufferTimer;
function isTouchpad(deltaY) {
    if (!deltaY) return;
    deltaY = Math.abs(deltaY)
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
                        isDivisible(deltaBuffer[1], 120) &&
                        isDivisible(deltaBuffer[2], 120));
    return !allDivisable;
} 
function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}
var requestFrame = (function () {
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              function (callback, element, delay) {
                  window.setTimeout(callback, delay || (1000/60));
              };
})();

/***********************************************
 * PULSE
 ***********************************************/
 
/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}

function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}
var isChrome = /chrome/i.test(window.navigator.userAgent);
var wheelEvent = null;
if ("onwheel" in document.createElement("div"))
	wheelEvent = "wheel";
else if ("onmousewheel" in document.createElement("div"))
	wheelEvent = "mousewheel";

if (wheelEvent && isChrome) {
	addEvent(wheelEvent, wheel);
	addEvent("mousedown", mousedown);
	addEvent("load", init);
}
})();

/*
 * jQuery replaceText - v1.1 - 11/21/2009
 * http://benalman.com/projects/jquery-replacetext-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
( function( e ) {
	e.fn.replaceText = function( t, n, r ) {
		return this.each( function() {
			var i = this.firstChild,
				s, o, u = [];
			if ( i ) {
				do {
					if ( i.nodeType === 3 ) {
						s = i.nodeValue;
						o = s.replace( t, n );
						if ( o !== s ) {
							if ( !r && /</.test( o ) ) {
								e( i ).before( o );
								u.push( i )
							} else {
								i.nodeValue = o
							}
						}
					}
				} while ( i = i.nextSibling )
			}
			u.length && e( u ).remove()
		} )
	}
} )( jQuery );

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

// Post format icons
$(document).ready(function() {
	$(".post-main").each(function() {
		var t = $(this),
			i = t.find(".post-url").attr("data-url");
		$.get(i, function(i) {
			$(i).find('.post-body iframe[src*="youtube.com"]').length && t.find(
					".post-thumb").after(
					'<div class="post-format"><i id="youtube-icon" class="fa fa-play"></i></div>'
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
					".post-body .twitter-tweet")))
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
			a.html("<span>" + t(e).find(".post-body").text().substr(0, 130) +
				" ...</span>")
		}, "html") : t.get(a.attr("data-post"), function(e) {
			a.html("<span>" + t(e).find(".post-body").text().substr(0, 140) +
				" ...</span>")
		}, "html")
	})
}(jQuery), $(".post-thumb a").attr("style", function(t, a) {
	return a.replace("/s72-c", "/s1600")
});
