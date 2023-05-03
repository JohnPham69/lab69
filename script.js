'use strict';
//In progress
const emailForm = document.querySelector('#lamo_haha');
const emailInput = document.querySelector('#email-input');
const formContainer = document.querySelector('#email-form');
var show = document.getElementById("show");

emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    if (email === 'khangpxgfx13494@funix.edu.vn') {
        formContainer.style.display = 'none';
        show.style.display = 'block';
    }
});
//No touch
//var mobile = window.matchMedia("(max-width: 600px)");

var boxes = document.querySelectorAll(".box");

boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        var the_parent = document.getElementById(`${box.id}`);
        var the_child = the_parent.querySelector("div").id;
        var correct = document.getElementById(the_child);
        var yay = correct.querySelector("div").id;
        var more = document.getElementById(yay);
        box.classList.toggle("clicked");
        if (box.classList.contains("clicked")) {
            more.style.display = "block";
            more.style.height = "fit-content";
            for (let i = 0; i < boxes.length; i++) {
                if (boxes[i].id !== yay) {
                    boxes[i].style.height = "fit-content";
                }
            }
        } else {
            more.style.display = "none";
        }
    });
});
/*
var dang = document.getElementsByClassName("col");
dang.addEventListener("click", function(event) {
    var p = event.target.id;
    var the_parent = document.getElementById(`${p}`);
    var the_child = the_parent.querySelector("div").id;
    var more = document.getElementById(the_child);
    the_parent.classList.toggle("clicked");
    if (the_parent.classList.contains("clicked")) {
        more.style.display = "block";
    } else {
        more.style.display = "none";
    }
})
*/


//function expand(a) {}