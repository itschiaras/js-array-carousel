// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello.

//creo array con 5 immagini all'interno

const images = [
    {
        title: "Spiderman",
        file: "01.webp"
    },
    {
        title: "Ratchet & Clank",
        file: "02.webp"
    },
    {
        title: "Fortnite",
        file: "03.webp"
    },
    {
        title: "Stray",
        file: "04.webp"
    },
    {
        title: "MCU Avengers",
        file: "05.webp"
    },
]

console.log(images);

// creo una variabile per prendere lo slider dove andrò ad inserire le 5 immagini
const container = document.querySelector('.wrapper');
const slider = document.querySelector('.slider');
const thumbnails = document.querySelector('.thumbnails');
console.log(thumbnails);


function carousel () {
    images.forEach((image) => {
        slider.innerHTML += `<div class="slide"> <img src="img/${image.file}" alt="${image.title}"> <div class="titlebox">${image.title}</div></div>`
        thumbnails.innerHTML += `<div class="thumbnail"><img class="image-slide" src="img/${image.file}" alt="${image.title}"></div>`

    })
}

carousel();



// essendo tutte in d-none, le immagini non si vedranno, quindi:
// - creo una variabile "currentIndex" con dentro l'indice dell'imagine che voglio mostrare per prima 
// - aggiungo alla slide con quell'index una classe active (con d-block), per renderla visibile
let currentIndex = 0;
document.querySelectorAll(".slide")[currentIndex].classList.add('active');
document.querySelectorAll(".thumbnail")[currentIndex].classList.add('active');




// creo due variabili per prendere i bottoni su cui metterò un evento al click

const prev = document.querySelector('.previous');
const next = document.querySelector('.next');

// applico l'evento "click" al bottone next

next.addEventListener('click', goNext);

// creo la funzione "goNext" indicando le istruzioni per passare da una slide ad un'altra, rimuovendo la classe "active".

function goNext() {
    document.querySelectorAll(".slide")[currentIndex].classList.remove('active');
    document.querySelectorAll(".thumbnail")[currentIndex].classList.remove('active');
    // condizione per ripartire dalla prima slide dopo essere arrivati all'ultima
    if (currentIndex === images.length -1) {
        currentIndex = 0;
    } else {
        currentIndex++;
        
    }

    // a questo punto l'immagine con il valore di currentIndex attuale prenderà la classe "active" e sarà visibile
    document.querySelectorAll(".slide")[currentIndex].classList.add('active');
    document.querySelectorAll(".thumbnail")[currentIndex].classList.add('active');
}




let myInterval = setInterval(goNext(), 1000);


function stopAutoPlay () {
    clearInterval(myInterval);
}

// function startAutoPlay () {
//     myInterval = setInterval(goNext(), 1000);
// }

slider.addEventListener('mouseover', stopAutoPlay);
// slider.addEventListener('mouseout', startAutoPlay);



// creo la funzione "goPrev" indicando le istruzioni per andare alla slide precedente, rimuovendo la classe "active".
prev.addEventListener('click', goPrev);

function goPrev() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    document.querySelectorAll(".thumbnail")[currentIndex].classList.remove('active');
    if (currentIndex === 0) {
        currentIndex = images.length -1;
    } else {
        currentIndex--;
    }
   
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');
    document.querySelectorAll(".thumbnail")[currentIndex].classList.add('active');

}

slider.addEventListener('mouseover', ()=> clearInterval(autoplay));

const autoplay = setInterval(goNext, 2000);


