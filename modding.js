// creditos por las imagenes a los autores TheKingofWarrr, ClezylGabane, urbanator
const imagenes = [
    "./images/blender.png",
    "./images/3ds max.png"
];

const backgrounds = [
    "./images/movies/banner.jpg",
    "./images/movies/banner2.jpg",
    "./images/movies/banner3.jpg",
    "./images/movies/banner4.jpg"
];

let foto = 0;

function nextimage() {
    foto = (foto + 1) % Math.max(imagenes.length, backgrounds.length);

    const cambiar = document.querySelectorAll('.movie-title');
    cambiar.forEach((img, index) => {
        if (imagenes[index % imagenes.length]) {
            img.src = imagenes[foto % imagenes.length];
        }
    });

    const banner = document.querySelector('.banner');
    if (banner) {
        banner.style.backgroundImage = `url(${backgrounds[foto % backgrounds.length]})`;
    }
}

setInterval(nextimage, 3000);

const trailer = document.querySelector('.trailer');
const closeBtn = document.querySelector('.close');
const iframe = document.getElementById('youtube-video');
const carouselItems = document.querySelectorAll('.carousel-item');
const btnTrailer = document.querySelector('.button');
const btnPlay = document.querySelector('.play'); 

let seleccionar = null;

carouselItems.forEach(item => {
    item.addEventListener('click', () => {
        seleccionar = item.getAttribute('data-video-id');
    });
});

btnTrailer.addEventListener('click', (e) => {
    e.preventDefault();
    if (seleccionar) {
        trailer.classList.add('active');
        iframe.src = `https://www.youtube.com/embed/${seleccionar}?autoplay=1`;
    } else {
        alert("Por favor, selecciona una imagen del carrusel primero.");
    }
});

btnPlay.addEventListener('click', (e) => {
    e.preventDefault();
    trailer.classList.add('active');
    iframe.src = "https://www.youtube.com/embed/SvzjTbBCZTI?autoplay=1";
});

closeBtn.addEventListener('click', () => {
    trailer.classList.remove('active');
    iframe.src = "";
});

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.querySelectorAll('.nav li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    nav.classList.remove('active');
});