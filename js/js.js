$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', +(scrolled * 0.4) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
// $(document).resize(function(){
//     var windowWidth = $(window).width();
//     if(windowWidth > 1280)$(".card-1").addClass("landing-content");
//     else $(".card-1").removeClass("landing-content");
//     if(windowWidth > 1280)$(".card-2").addClass("landing-content2");
//     else $(".card-2").removeClass("landing-content2");
//   });
$(document).ready(function(){
	$('.landing-content, .landing-content2').mousemove(function(e){
		var windowWidth = $(window).width();
		
		var x = (e.pageX + this.offsetLeft) / -20;
	    var y = (e.pageY + this.offsetTop) / -10;
	    if (windowWidth > 1280) {
	    	$(this).css('background-position', x + 'px ' + y + 'px');
	    } else {
	    	$(this).css('background-position', 'center '+ 'center');
	    }
		
	});
});

$(window).load(function(){
    $('.preloader').hide('slow');

    if (document.readyState === "complete") {
    	$('.spec').removeAttr('disabled');
    } else {
    	$('.spec').addAttr('disabled');
    }
});

