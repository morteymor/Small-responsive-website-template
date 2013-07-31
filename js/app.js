$(function() {
	// Win Phone Mobile
	browserUA = navigator.userAgent.toLowerCase();
	if (browserUA.search('windows phone os 7') > -1){
	  $(".main-menu").toggleClass("win-mobile");
		$(".menu-button").click(function() {
			$(this).next("ul").toggleClass("show-the-menu");
		});
	}else{}
});

$(document).ready(function() {
	$('.fancybox-media')
		.attr('rel', 'media-gallery')
		.fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',

			arrows : false,
			closeBtn  : false,
			helpers : {
				media : {},
				buttons : {}
			}
		});
});






