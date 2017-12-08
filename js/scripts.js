
$(window).on('scroll', efectosScroll, parallax);



$(document).ready(function(){

	$('.barras').on('click', muestraMenu);
	$('.desplazar').on('click', navegar);


});


function muestraMenu(){
	$('.menu').toggleClass('abierto');
	}

function efectosScroll(){

	let scrollActual = $(window).scrollTop();
	let altoPantalla = $(window).innerHeight() / 2; 
	let profundidadBoton  = $('#tratamientos .boton').offset().top;
	let scrollObjetivo = profundidadBoton - altoPantalla;

	if(scrollActual >= scrollObjetivo) {

	$('#tratamientos .boton').addClass('visible');

	}
}




function navegar(){

	let objetivo = $(this).data('seccion');

	let profundidad = $(objetivo).offset().top;

	$('html').animate({
		scrollTop: profundidad
	}, 1000);

	$('.menu').removeClass('abierto');
}



function parallax(){

	var scrolled = $(window).scrollTop();

		  $('.bg').css('left', - (scrolled * 0.05));
		  $('.bg1').css('right', - (scrolled * .3));
		  $('.bg2').css('right', - (scrolled * .6));
		  $('.bg3').css('transform', 'translateY(' + (-scrolled * .09) + 'px)');
}