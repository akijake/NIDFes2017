// JavaScript Document
$(function () {
	"use strict";
	$('a[href^=#]').click(function () {
		var speed = 500;
		var href = $(this).attr("href");
		var target = $(href === "#" || href === "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});
});

$(function () {
	"use strict";
	var licount = $('.nf_navigation li').length;
	var liwidth = 94 / licount;
	if (liwidth < 20) {
		liwidth = liwidth * 2;
	} else {}
	liwidth = Math.floor(liwidth);
	liwidth = liwidth + "vw";
	$('.nf_navigation li').css('width', liwidth);
});
