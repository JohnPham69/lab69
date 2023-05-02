'use strict';
//In progress
const emailForm = document.querySelector('#lamo_haha');
const emailInput = document.querySelector('#email-input');
const formContainer = document.querySelector('#email-form');
var show = document.getElementById("show");

emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    if (email === 'pxgiakhang@gmail.com') {
        formContainer.style.display = 'none';
        show.style.display = 'block';
    }
});
//No touch
var boxes = document.querySelectorAll(".box");

boxes.forEach(function(box) {
    var more = box.querySelector(".more");
    console.log("boowhoo");
    box.addEventListener("click", function() {
        box.classList.toggle("clicked");
        if (box.classList.contains("clicked")) {
            more.style.display = "block";
            var bruh = (box.parentNode.offsetHeight / parseFloat(getComputedStyle(box.parentNode).fontSize)).toFixed();
            var b = parseInt(bruh) + 10;
            var a = `${b}em`;
        } else {
            more.style.display = "none";
        }
    });
});

//function expand(a) {}