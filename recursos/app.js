var slideNumber = 1;
const totalSlideNumber = $('#num_slides').val();

$(document).ready(function () {
    // Inicialización de la diapositiva y el total
    mostrarSlide();
    $("#totalSlides").text(totalSlideNumber);

    // Botón de avanzar
    $('#btnAvanzar').click(function () {
        if (slideNumber >= totalSlideNumber) {
            return;
        }
        slideNumber++;
        mostrarSlide();
    });

    // Botón de retroceder
    $('#btnRetroceder').click(function () {
        if (slideNumber <= 1) {
            return;
        }
        slideNumber--;
        mostrarSlide();
    });

    // Manejo del menú lateral al hacer clic en el icono de hamburguesa
    $('.toggle-btn').on('click', function () {
        $("#lista").toggleClass("active");
    });

    // Selección de diapositiva desde el menú lateral
    $('#lista ul li').click(function () {
        slideNumber = $(this).index() + 1;
        mostrarSlide();
    });
});


function mostrarSlide() {
    $("#slideActual").text(slideNumber);
    $("#container img").attr("src", "recursos/Diapositiva" + slideNumber + ".jpeg");
    manejarUsoDeLosBotones(); // Cada vez que se cambia de diapositiva, se actualizan los botones
}

function manejarUsoDeLosBotones() {
    $('#btnAvanzar').prop('disabled', slideNumber == totalSlideNumber);
    $('#btnRetroceder').prop('disabled', slideNumber == 1);
}