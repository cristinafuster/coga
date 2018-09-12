
$(document).ready(function(){

	$('.desplazar').on('click', navegar);


});


function navegar(){

	let objetivo = $(this).data('seccion');

	let profundidad = $(objetivo).offset().top;

	$('html').animate({
		scrollTop: profundidad
	}, 1000);

	$('#navbarToggler').removeClass('show');
}


/*$(window).on('scroll', mostrarNav);
function mostrarNav(){

	var scrollRealizado = $(window).scrollTop();
				
				if (scrollRealizado > 250) {

					$('nav img').addClass('visible')
					};
				
				} 



$(window).on('scroll', reveal);

			let scrollActual, profundidad;

			function reveal(){

				scrollActual = $(window).scrollTop();
				profundidad = $('#servicios .ojos').offset().top - $(window).innerHeight() / 2;


				if (scrollActual >= profundidad) {

					$('#servicios .ojos').addClass('visible');
				}
			}*/
		


