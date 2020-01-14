$(document).ready(function(){
    $(".navbar").on("click","a", function (event) {

        event.preventDefault();
 
        var id  = $(this).attr('href'),
 
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 500);
    });

    $(".top_button").on("click","a", function (event) {

        event.preventDefault();
 
        var id  = $(this).attr('href'),
 
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 500);
    });
});

$(window).scroll(function() {
  if ($(this).scrollTop()>=400) {
    // длительность анимации - 'slow'
    // тип анимации -  'linear'
    $('.top_button').show('fast', 'linear');
  }
  else {
    // длительность анимации - 'fast'
    // тип анимации -  'swing'
    $('.top_button').hide('fast', 'linear');
  }
});