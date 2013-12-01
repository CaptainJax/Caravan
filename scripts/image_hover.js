$(document).ready(function(){
    $('.hoverPop').mouseover(function(){
		var imgSrc = $(this).attr('src');
		var srcLng = imgSrc.length;
		var hvrSrc = imgSrc.substr(0,srcLng-4) + "_hover.png";
		$(this).attr('src',hvrSrc);
	});	
	$('.hoverPop').mouseout(function(){
		var imgSrc = $(this).attr('src');
		var srcLng = imgSrc.length;
		var outSrc = imgSrc.substr(0,srcLng-10) + ".png";
		$(this).attr('src',outSrc);
	});
});