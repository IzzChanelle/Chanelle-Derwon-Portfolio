/* SCROLL REVEAL EFFECT */

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }else{

            element.classList.remove("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();


/* FORM SUBMIT */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Your message has been sent!");

    form.reset();

});