$(function () { $('.tl-sidebarW>div>h2,.comments h4,.posttitle h1,.static_page .posttitle h2,.footer-sec>div>h2').wrapInner('<span class="tl-wrapIn"></span>'); $('.dropdown').prepend('<span class="dropdown-button"><i class="fa fa-bars"></i> القائمة الرئيسية</span>'); $('.navigation-button').click(function () { $('.navigation .widget-content').slideToggle(); $(this).toggleClass('active'); }); $('.dropdown-button').click(function () { $('.dropdown .widget-content').slideToggle(); $(this).toggleClass('active'); }); $('.tl-accordion').each(function () { $('div', this).hide(); $(this).find('span').first().addClass('active'); $('span.active', this).next('div').slideDown(); var a = $(this); $('span', this).click(function () { $('div', a).slideUp(); $('span', a).removeClass('active'); $(this).addClass('active'); $(this).next('div').slideDown(); }); }); $('.tl-tabs').each(function () { var a = $(this), b = $('.tl-tabbtn', a), c = $('.tl-tabcontent', a); c.children('div').hide(); c.children('div').first().fadeIn(); b.children('span').first().addClass('active'); b.children('span').click(function () { var d = $(this).index(); b.children('span').removeClass('active'); $(this).addClass('active'); c.children('div').each(function () { if ($(this).index() == d) { $(this).slideDown(); } else { $(this).slideUp(); } }); }); }); $('.recent-content>div').hide(); $('.recent-content div:first-child').show(); $('.recent-button span:first-child').addClass('active'); $('.recent-button').find('span').click(function () { $('.recent-button').find('span').removeClass('active'); var currentclass = $(this).attr('class'); $(this).addClass('active'); $('.recent-content').children('div').each(function () { if ($(this).attr('class') == currentclass) { $('.recent-content').find('div').hide(); $(this).find('div').show(); $(this).fadeIn(); } else { $(this).hide(); } }); });$('.searchicon span').click(function () { var cwidth = $('.search-wrap').width() == 250 ? 0 : 250; if ($('.search-wrap').width() === 0) { $('.searchicon span').toggleClass('nonactive'); $('.search-wrap,.searchform').animate({ width: cwidth }); } $('.search-out').hide(); }); $(document).mouseup(function (e) { if ($('.search-wrap').width() == 250) { var container = $(".search-wrap"); if (!container.is(e.target) && container.has(e.target).length === 0) { $('.search-wrap,.searchform').animate({ width: 0 }); $('.search-out').hide(); $('.searchicon span').toggleClass('nonactive'); } } }); $(".scrollbottom").click(function () { $('html, body').animate({ scrollTop: $(".main-content").offset().top }, 400); }); $('.overlay,.panelclose').click(function () { $('.overlay').fadeOut(); $('.wrapper').removeClass('active').height('auto'); $('.navo').addClass('close').removeClass('open'); $('.panel').addClass('close').removeClass('open'); setTimeout(function () { $('.panel').fadeOut(); }, 300); }); $('.navo').click(function () { if ($(this).hasClass('close')) { setTimeout(function () { $('.overlay').fadeIn(); $('.wrapper').addClass('active').height($(window).height()); $('.panel').addClass('open').removeClass('close'); }, 300); $(this).addClass('open').removeClass('close'); $('.panel').show(0).height($(window).height()); } }); $('.overlay').click(function () { $('.overlay').fadeOut(); $('.wrapper').removeClass('active').height('auto'); $(this).addClass('close').removeClass('open'); }); $('.backtotop').click(function () { $('html, body').animate({ scrollTop: 0 }, 800); return false; }); var sb = $('.tl-stab-buttons span'), sc = $('.tl-tab-content>div'); sb.first().addClass('active'); sc.hide(); sc.first().slideDown(); sb.click(function () { $('.tl-stab-buttons span').removeClass('active'); var thisclass = $(this).attr('class'); $(this).addClass('active'); $('.tl-tab-content>div').each(function () { if ($(this).hasClass(thisclass)) { $(this).fadeIn(800); } else { $(this).hide(); } }); }); $('.loadingscreen').fadeOut(); $('a.popup-icon').colorbox({ scrolling: false }); $('.tl-contactpop').click(function () { $('.overlay,.contactpop').fadeIn(); }); $('.overlay,.closecontact').click(function () { $('.overlay,.contactpop').fadeOut(); }); });$(document).ready(function() { $('pre code').each(function(i, block) { hljs.highlightBlock(block); }); });
