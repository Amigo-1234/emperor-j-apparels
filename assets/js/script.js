const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector(".header");

/* Mobile Menu */

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

/* Header Scroll Effect */

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});


const changingWord = document.getElementById("changing-word");

const words = [
    "Confidence.",
    "Elegance.",
    "Distinction.",
    "Greatness.",
    "Every Occasion."
];

let currentWord = 0;

setInterval(() => {

    changingWord.style.opacity = "0";

    changingWord.style.transform = "translateY(15px)";

    setTimeout(() => {

        currentWord++;

        if(currentWord >= words.length){
            currentWord = 0;
        }

        changingWord.textContent = words[currentWord];

        changingWord.style.opacity = "1";

        changingWord.style.transform = "translateY(0)";

    }, 400);

}, 3000);