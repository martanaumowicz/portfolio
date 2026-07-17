const images = document.querySelectorAll(".gallery img");

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");

const close = document.querySelector(".close");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");


let currentIndex = 0;


// otwieranie zdjęcia

images.forEach((image, index) => {

    image.onclick = () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    }

});


// pokazanie aktualnego zdjęcia

function showImage(){

    lightboxImage.src = images[currentIndex].src;

}


// następne zdjęcie

next.onclick = () => {

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    showImage();

};


// poprzednie zdjęcie

prev.onclick = () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    showImage();

};


// zamknięcie

close.onclick = () => {

    lightbox.style.display = "none";

};


// kliknięcie poza obraz

lightbox.onclick = (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

};


// klawiatura

document.addEventListener("keydown", (e)=>{


    if(lightbox.style.display === "flex"){


        if(e.key === "ArrowRight"){

            next.click();

        }


        if(e.key === "ArrowLeft"){

            prev.click();

        }


        if(e.key === "Escape"){

            close.click();

        }

    }


});