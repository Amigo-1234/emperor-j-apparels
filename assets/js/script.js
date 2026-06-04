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

const reveals = document.querySelectorAll(
    ".reveal-left, .reveal-right"
);

window.addEventListener("scroll", () => {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("reveal-active");

        }

    });

});

const counters = document.querySelectorAll(".counter");

let counted = false;

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".about-stats");

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100 && !counted){

        counted = true;

        counters.forEach(counter => {

            const target =
                +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 60;

            const updateCounter = () => {

                count += speed;

                if(count < target){

                    counter.textContent =
                        Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }else{

                    if(target === 100){

                        counter.textContent =
                            target + "%";

                    }else{

                        counter.textContent =
                            target + "+";

                    }

                }

            };

            updateCounter();

        });

    }

});

const serviceCards =
document.querySelectorAll(".service-card");

const serviceObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            serviceCards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("show");

                },index * 200);

            });

        }

    });

});

serviceObserver.observe(
document.querySelector(".services")
);

const galleryItems =
document.querySelectorAll(".gallery-item");

const galleryObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            galleryItems.forEach((item,index)=>{

                setTimeout(()=>{

                    item.classList.add("show");

                },index * 150);

            });

        }

    });

});

galleryObserver.observe(
document.querySelector(".gallery-preview")
);