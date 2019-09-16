$(function() {
	$("[data-ref^='#']").bind('click', function(e) {
		e.preventDefault();
		var target = $(this).attr("data-ref");
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 300, function() {
			location.hash = target;
		});
		return false;
	});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		$('.page-section').each(function(i) {
			 if ($(this).position().top <= scrollDistance) {
					$('.navigation a.active').removeClass('active');
			 }
		});
}).scroll();

$(function(){
	$(".accordion-titulo").click(function(e){
			 
		  e.preventDefault();
	  
		  var contenido=$(this).next(".accordion-content");
  
		  if(contenido.css("display")=="none"){ //open		
			contenido.slideDown(250);			
			$(this).addClass("open");
		  }
		  else{ //close		
			contenido.slideUp(250);
			$(this).removeClass("open");	
		  }
  
		});
  });

