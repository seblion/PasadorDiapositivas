var slideNumber = 1;
const totalSlideNumber = $('#num_slides').val();

document.addEventListener("DOMContentLoaded", function () {
    mostrarSlide(slideNumber);
    let totalSlides = document.querySelector('#totalSlides');
    totalSlideNText = document.createTextNode(totalSlideNumber)
    totalSlides.append(totalSlideNText);
});

$(document).ready(function () {
    $('#btnAvanzar').click(function () {
        if (slideNumber < totalSlideNumber) {
            slideNumber++;
            mostrarSlide(slideNumber);
        }
    });

    $('#btnRetroceder').click(function () {
        if (slideNumber > 1) {
            slideNumber--;
            mostrarSlide(slideNumber);
        }
    });

    $('.toggle-btn').click(function () {
        let lista = document.querySelector('#lista');
        if (lista.hasAttribute('class')) {
            lista.removeAttribute('class');
        } else {
            lista.setAttribute('class', 'active');
        }
    });

    $('#lista ul li').click(function () {
        slideNumber = $(this).index() + 1;
        mostrarSlide(slideNumber);
    });
});


function mostrarSlide(slideNumber) {
    let slideActual = document.querySelector('#slideActual');
    if (slideActual.hasChildNodes()) {
        slideActual.removeChild(slideActual.firstChild);
    }

    let currrentSlideNumber = document.createTextNode(slideNumber);
    slideActual.append(currrentSlideNumber);


    let imagen = document.querySelector('#container img');
    imagen.setAttribute('src', "recursos/Diapositiva" + slideNumber + ".jpeg");
}
