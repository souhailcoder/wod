<script type='text/javascript'>/*<![CDATA[*/
$(function(){var b=-1!==$(".post-body").html().indexOf('<div class="break">\n</div>')?$(".post-body article > [dir]").html().split('<div class="break">\n</div>'):1;$("#postAD-top").append($("#HTML201"));$("#postAD-bottom").append($("#HTML203"));var a=$(".post-body [dir] *:not('.s-code *,blockquote *,.sh-msg *,.slider *,.accordion *,.contact *')");var c=Math.floor(a.length/2);1==b.length?$("#HTML202").remove():a.eq(c).after($("#HTML202"));if(1<b.length)for(b.splice(0,0,""),$(".post-body article > [dir]").empty(),
$(".post-body article > [dir]").after('<div class="post-pagin"/>'),a=0;a<b.length;a+=1)1===a?($(".post-body article > [dir]").append('<div class="l-block b-active" id="block-'+a+'"></div>'),$(".post-pagin").append('<span class="pagin-active">'+a+"</span>")):1<a&&($(".post-body article > [dir]").append('<div class="l-block" id="block-'+a+'"></div>'),$(".post-pagin").append("<span>"+a+"</span>")),c=$.parseHTML(b[a]),$(c).appendTo($("#block-"+a));$("body").on("click",".post-pagin span",function(){$("#block-"+
$(this).text()).addClass("b-active").siblings().removeClass("b-active");$("html,body").animate({scrollTop:$(".article-title").offset().top})});$(".whatsapp").click(function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){var a=$(this).attr("data-text"),b=$(this).attr("data-link");a=encodeURIComponent(a)+" - "+encodeURIComponent(b);window.location.href="whatsapp://send?text="+a}});if(nav_titles){var d=$("#Blog1_blog-pager-newer-link"),
e=$("#Blog1_blog-pager-older-link"),f=$(".newer-text").text(),g=$(".older-text").text();$.get(d.attr("href"),function(a){a=$(a).find("h1.entry-title").text();d.html("<span>"+f+"</span><p>"+a+"</p>");d.attr("title",a)});$.get(e.attr("href"),function(a){a=$(a).find("h1.entry-title").text();e.html("<span>"+g+"</span><p>"+a+"</p>");e.attr("title",a)})}else $("#blog-pager").addClass("nav-links-only")});
/*]]>*/</script>
<!--Page Navigation Ends -->
<script type='text/javascript'>
 /*<![CDATA[*/
$(window).bind("load", function () {
    jQuery("#loader").fadeOut("slow");
    jQuery("#preloader").delay(0).fadeOut();
});
  /*]]>*/
</script>
