
$(window).on('scroll', efectosScroll);


$(document).ready(function(){

	$('.barras').on('click', muestraMenu);
	$('.botonModal').on('click', mostrarModal);
	$('.cerrarModal').on('click', cerrarModal);

});


function muestraMenu(){
	$('nav').toggleClass('abierto');
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

function mostrarMenu() {

	$('.menu').toggleClass('abierto');
	}

function mostrarModal() {

	let numeroModal = $(this).data('numero');

	$('.contenidoModal[data-contenido=' + numeroModal + ']').show();

	$('.fondoModal').fadeIn(300);

	};

function cerrarModal() {

	$('.fondoModal, .contenidoModal').fadeOut(500);
	}
