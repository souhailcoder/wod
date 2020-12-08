// Resize Images to container by Christian Varga - http://christianvarga.com
(function(e){e.fn.resizeToParent=function(t){function r(e){e.css({width:"",height:"auto","margin-left":"","margin-top":""});var n=e.parents(t.parent).width();var r=e.parents(t.parent).height();var i=e.width();var s=e.height();var o=i/n;if(s/o<r){e.css({width:"auto",height:r});i=i/(s/r);s=r}else{e.css({height:"auto",width:n});i=n;s=s/o}var u=(i-n)/-2;var a=(s-r)/-2;e.css({"margin-left":u,"margin-top":a})}var n={parent:"div",delay:100};var t=e.extend(n,t);var i;var s=this;e(window).on("resize",function(){clearTimeout(i);i=setTimeout(function(){s.each(function(){r(e(this))})},t.delay)});return this.each(function(){var t=e(this);t.attr("src",t.attr("src"));t.load(function(){r(t)});if(this.complete){r(t)}})}})(jQuery);$(".imco img").resizeToParent();

// unslider plugin - unslider.com
(function(e,t){if(!e)return t;var n=function(){this.el=t;this.items=t;this.sizes=[];this.max=[0,0];this.current=0;this.interval=t;this.opts={speed:500,delay:3e3,complete:t,keys:!t,dots:t,fluid:t};var n=this;this.init=function(t,n){this.el=t;this.ul=t.children("ul");this.max=[t.outerWidth(),t.outerHeight()];this.items=this.ul.children("li").each(this.calculate);this.opts=e.extend(this.opts,n);this.setup();return this};this.calculate=function(t){var r=e(this),i=r.outerWidth(),s=r.outerHeight();n.sizes[t]=[i,s];if(i>n.max[0])n.max[0]=i;if(s>n.max[1])n.max[1]=s};this.setup=function(){this.el.css({overflow:"hidden",width:n.max[0],height:this.items.first().outerHeight()});this.ul.css({width:this.items.length*100+"%",position:"relative"});this.items.css("width",100/this.items.length+"%");if(this.opts.delay!==t){this.start();this.el.hover(this.stop,this.start)}this.opts.keys&&e(document).keydown(this.keys);this.opts.dots&&this.dots();if(this.opts.fluid){var r=function(){n.el.css("width",Math.min(Math.round(n.el.outerWidth()/n.el.parent().outerWidth()*100),100)+"%")};r();e(window).resize(r)}if(this.opts.arrows){this.el.parent().append('<p class="arrows"><span class="prev">â†</span><span class="next">â†’</span></p>').find(".arrows span").click(function(){e.isFunction(n[this.className])&&n[this.className]()})}if(e.event.swipe){this.el.on("swipeleft",n.prev).on("swiperight",n.next)}};this.move=function(t,r){if(!this.items.eq(t).length)t=0;if(t<0)t=this.items.length-1;var i=this.items.eq(t);var s={height:i.outerHeight()};var o=r?5:this.opts.speed;if(!this.ul.is(":animated")){n.el.find(".dot:eq("+t+")").addClass("active").siblings().removeClass("active");this.el.animate(s,o)&&this.ul.animate(e.extend({left:"-"+t+"00%"},s),o,function(i){n.current=t;e.isFunction(n.opts.complete)&&!r&&n.opts.complete(n.el)})}};this.start=function(){n.interval=setInterval(function(){n.move(n.current+1)},n.opts.delay)};this.stop=function(){n.interval=clearInterval(n.interval);return n};this.keys=function(t){var r=t.which;var i={37:n.prev,39:n.next,27:n.stop};if(e.isFunction(i[r])){i[r]()}};this.next=function(){return n.stop().move(n.current+1)};this.prev=function(){return n.stop().move(n.current-1)};this.dots=function(){var t='<ol class="dots">';e.each(this.items,function(e){t+='<li class="dot'+(e<1?" active":"")+'">'+(e+1)+"</li>"});t+="</ol>";this.el.addClass("has-dots").append(t).find(".dot").click(function(){n.move(e(this).index())})}};e.fn.unslider=function(t){var r=this.length;return this.each(function(i){var s=e(this);var u=(new n).init(s,t);s.data("unslider"+(r>1?"-"+(i+1):""),u)})}})(window.jQuery,false);



// slider image widget by Mohamed Abo-Elghranek 
$(window).bind("load",function(){$("#slider br").remove(),$("#slider .widget img").removeAttr("width").removeAttr("height"),$("#slider .widget img").wrap('<div class="slider-img" />'),$(".slider-img img").resizeToParent(),$("#slider .widget").wrapAll("<ul />"),$("#slider .widget").replaceWith(function(){return $('<li class="widget" />').append($(this).contents())}),$('<div class="slideraro"><a class="unslider-arrow prev"></a><a class="unslider-arrow next"></a></div>').insertBefore("#slider ul"),$(".slider").unslider({keys:!0,dots:!0,fluid:!0});var e=$(".slider").unslider();$(".unslider-arrow").click(function(){var i=this.className.split(" ")[1];e.data("unslider")[i]()}),$(".slider-load").remove()});


$('#slider-container h2').wrap('<div class="slide-wrap-ab"></div>');

$('.slide-wrap-ab').wrap('<div class="slide-wrap"></div>');

$(document).ready(function(){ 
$(".slide-wrap-ab").append($("#slider .widget-content .caption").html());
}); 


$(document).ready(function(){ 
$('a[name="templateism-info"]').before($('.status-msg-wrap').html()); 
$('.status-msg-wrap').html(''); 
}); 


$('.caption').wrapInner('<p/>');
// Get all the span's inside parent2
var $span = $(".widget-content span.caption");
// Replace all the span's with a div
$span.replaceWith(function () {
    return $('<div/>', {
        class: 'caption',
        html: this.innerHTML
    });
});


$("#slider-container .widget").append($("#slider .widget-content .caption").html());
$(document).ready(function() {
    $('.label_thumb').attr('src', function(i, src) {
        return src.replace('s72-c', 'a400');
    });
});
