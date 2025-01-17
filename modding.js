const trailer = document.querySelector('.trailer');
const closeBtn = document.querySelector('.close');
const iframe = document.getElementById('youtube-video');
const carouselItems = document.querySelectorAll('.carousel-item');
const btnTrailer = document.querySelector('.button');
const btnPlay = document.querySelector('.play'); 

let selectedVideoId = null;

// Función para seleccionar el video al hacer clic en una imagen del carrusel
carouselItems.forEach(item => {
    item.addEventListener('click', () => {
        selectedVideoId = item.getAttribute('data-video-id');
    });
});

// Reproducir video desde el carrusel
btnTrailer.addEventListener('click', (e) => {
    e.preventDefault();
    if (selectedVideoId) {
        trailer.classList.add('active');
        iframe.src = `https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`;
    } else {
        alert("Por favor, selecciona una imagen del carrusel primero.");
    }
});

// Reproducir el trailer con un video específico
btnPlay.addEventListener('click', (e) => {
    e.preventDefault();
    trailer.classList.add('active');
    iframe.src = "https://www.youtube.com/embed/SvzjTbBCZTI?autoplay=1";
});

// Función para cerrar el video y detener la reproducción
closeBtn.addEventListener('click', () => {
    trailer.classList.remove('active');
    iframe.src = "";
});
