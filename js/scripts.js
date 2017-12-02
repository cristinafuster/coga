
$(window).on('scroll', efectosScroll);


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
	let profundidadBoton  = $('#servicios .boton').offset().top;
	let scrollObjetivo = profundidadBoton - altoPantalla;

	if(scrollActual >= scrollObjetivo) {

	$('#servicios .boton').addClass('visible');

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

