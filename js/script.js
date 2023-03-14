// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello.

//creo array con 5 immagini all'interno

const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]

// creo una variabile per prendere lo slider dove andrò ad inserire le 5 immagini

const slider = document.querySelector('.slider');

// creo una variabile vuota dove andrò ad inserire un template literal
let slides = '';

// creo un ciclo for in cui vi sarà la variabile slides con il suo template literal 

for (let i = 0; i < images.length; i++) {
    slides = `
    <div class="slide">
    <img src="${images}" alt="character-${i}" >
    </div>
    `
}

// aggiungo alla variabile slider il contenuto della variabile slides

slider.innerHTML += slides;