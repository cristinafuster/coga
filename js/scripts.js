$(document).ready(function() {

				$('.botonModal').on('click', mostrarModal);

				$('.cerrarModal').on('click', cerrarModal);

			});


			function mostrarModal() {

				let numeroModal = $(this).data('numero');

				$('.contenidoModal[data-contenido=' + numeroModal + ']').show();

				$('.fondoModal').fadeIn(300);

			};


			function cerrarModal() {

				$('.fondoModal, .contenidoModal').fadeOut(500);
			}
