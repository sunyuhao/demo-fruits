$(document).ready(function(){
	$(window).bind('scroll',function(e){
		parallax();
	});
	$('a.tortue').click(function(){

		$('html,body').animate({scrollTop:0}, 1000, function(){
			parallax();
		});
		return false;

	});
	$('a.mangosteen').click(function(){

		$('html,body').animate({scrollTop:$('#mangosteen').offset().top}, 1000, function(){
			parallax();
		});
		return false;

	});
	$('a.coconut').click(function(){

		$('html,body').animate({scrollTop:$('#coconut').offset().top}, 1000, function(){
			parallax();
		});
		return false;

	});
	$('a.kiwi').click(function(){

		$('html,body').animate({scrollTop:$('#kiwi').offset().top}, 1000, function(){
			parallax();
		});
		return false;

	});
	$('a.guava').click(function(){

		$('html,body').animate({scrollTop:$('#guava').offset().top}, 1000, function(){
			parallax();
		});
		return false;

	});
});



function parallax(){
	var scrollPosition = $(window).scrollTop();
	$('#bubbles').css('top', (0-scrollPosition*.2)+'px');
	$('#images').css('top', (0-scrollPosition*.5)+'px');

}