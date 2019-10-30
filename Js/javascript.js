$(document).ready(function() {
    $("#conten0").show();
    $("#conten1").hide("fast");
    $("#conten2").hide("fast");
    $("#conten3").hide("fast");
    $("#conten4").hide("fast");
    $("#conten5").hide("fast");
    $("#conten6").hide("fast");
    $("#conten7").hide("fast");

    $('.linkInicio').on('click', function() {
        $("#conten0").show(300);
        $("#conten1").hide("fast");
        $("#conten2").hide("fast");
        $("#conten3").hide("fast");
        $("#conten4").hide("fast");
        $("#conten5").hide("fast");
        $("#conten6").hide("fast");
        $("#conten7").hide("fast");
    });

    $('#link1').on('click', function() {
        $("#conten1").show(300);
        $("#conten2").hide("fast");
        $("#conten3").hide("fast");
        $("#conten0").hide("fast");
        $("#conten4").hide("fast");
        $("#conten5").hide("fast");
        $("#conten6").hide("fast");
        $("#conten7").hide("fast");
    });
    $('#link2').on('click', function() {
        $("#conten1").hide("fast");
        $("#conten3").hide("fast");
        $("#conten2").show(300);
        $("#conten0").hide("fast");
        $("#conten4").hide("fast");
        $("#conten5").hide("fast");
        $("#conten6").hide("fast");
        $("#conten7").hide("fast");
    });
    $('#link3').on('click', function() {
        $("#conten1").hide("fast");
        $("#conten2").hide("fast");
        $("#conten3").show(300);
        $("#conten0").hide("fast");
        $("#conten4").hide("fast");
        $("#conten5").hide("fast");
        $("#conten6").hide("fast");
        $("#conten7").hide("fast");
    });
    $('#link4').on('click', function() {
        $("#conten1").hide("fast");
        $("#conten2").hide("fast");
        $("#conten3").hide("fast");
        $("#conten4").show(300);
        $("#conten0").hide("fast");
        $("#conten5").hide("fast");
        $("#conten6").hide("fast");
        $("#conten7").hide("fast");
    });
    $('#link5').on('click', function() {
        $("#conten1").hide("fast");
        $("#conten2").hide("fast");
        $("#conten3").hide("fast");
        $("#conten4").hide("fast");
        $("#conten0").hide("fast");
        $("#conten5").show(300);
        $("#conten6").hide("fast");
        $("#conten7").hide("fast");
    });
    $('#link6').on('click', function() {
        $("#conten1").hide("fast");
        $("#conten2").hide("fast");
        $("#conten3").hide("fast");
        $("#conten4").hide("fast");
        $("#conten0").hide("fast");
        $("#conten5").hide("fast");
        $("#conten6").show(300);
        $("#conten7").hide("fast");
    });
    $('#link7').on('click', function() {
        $("#conten1").hide("fast");
        $("#conten2").hide("fast");
        $("#conten3").hide("fast");
        $("#conten4").hide("fast");
        $("#conten0").hide("fast");
        $("#conten5").hide("fast");
        $("#conten6").hide("fast");
        $("#conten7").show(300);
    });
});

// $('#contenedor1').fadeIn(1000);

// $( "#link1" ).show( "slow" );
// $( "#link2" ).hide( 1000 );
// $(function() {
// 	$("[data-ref^='#']").bind('click', function(e) {
// 		e.preventDefault();
// 		var target = $(this).attr("data-ref");
// 		$('html, body').stop().animate({
// 			scrollTop: $(target).offset().top
// 		}, 100, function() {
// 			location.hash = target;
// 		});
// 		return false;
// 	});
// });

// $(window).scroll(function() {
// 		var scrollDistance = $(window).scrollTop();
// 		$('.page-section').each(function(i) {
// 			 if ($(this).position().top <= scrollDistance) {
// 					$('.navigation a.active').removeClass('active');
// 			 }
// 		});
// }).scroll();

// $(function(){
// 	$(".accordion-titulo").click(function(e){

// 		  e.preventDefault();

// 		  var contenido=$(this).next(".accordion-content");

// 		  if(contenido.css("display")=="none"){ //open		
// 			contenido.slideDown(250);			
// 			$(this).addClass("open");
// 		  }
// 		  else{ //close		
// 			contenido.slideUp(250);
// 			$(this).removeClass("open");	
// 		  }

// 		});
// });





// $(document).ready(function() {
// 	irArriba();
// 	$('#sectionA').on('click', function(){
// 		$('#intro').hide();
// 		$('#aaa').fadeIn();
// 		$('#bbb').hide();
// 		$('#ccc').hide();
// 	});

// 	$('#sectionB').on('click', function(){
// 		$('#bbb').show();
// 		$('#aaa').hide();
// 		$('#ccc').hide();
// 	});

// 	$('#sectionC').on('click', function(){
// 		$('#bbb').hide();
// 		$('#aaa').hide();
// 		$('#ccc').show();
// 	});



// 	  $('#bbb').hide();
// 	  $('#ccc').hide();
// 	$(".content-tab:not(:eq(0))").toggle();
// 	$(".title-tab i").toggleClass("fa-plus");

// 	$(".title-tab").click(function(){
// 		$(".content-tab").hide();
// 		$(".title-tab i").removeClass("fa-minus");
// 		$(".title-tab i").addClass("fa-plus");
// 		$(this).next().show();
// 		$(this).children().addClass("fa-minus");				
// 	})
// })

// function irArriba(){
// 	$('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
// 	$(window).scroll(function(){
// 	  if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
// 	});
// 	$('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
//   }