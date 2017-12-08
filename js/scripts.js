
$(window).on('scroll', efectosScroll);


$(document).ready(function(){

	$('.barras').on('click', muestraMenu);
	$('.desplazar').on('click', navegar);


});


function muestraMenu(){
	$('.menu').toggleClass('abierto');
	}





function navegar(){

	let objetivo = $(this).data('seccion');

	let profundidad = $(objetivo).offset().top;

	$('html').animate({
		scrollTop: profundidad
	}, 1000);

	$('.menu').removeClass('abierto');
}

