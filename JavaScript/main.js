"use strict";

//selects the elements that will be modified
let btnShare = document.querySelector(".share-btn");
let profileBlock = document.querySelector(".profile");
let socialDiv = document.querySelector(".social");
let contactDiv = document.querySelector(".contact");

//when clicked adds/removes the classes necessary to the effects
btnShare.addEventListener("click", ()=> {
    if(btnShare.ariaExpanded == "false") {
        btnShare.ariaExpanded = "true";
    } else {
        btnShare.ariaExpanded = "false";
    }
    btnShare.classList.toggle("bg-share-btn");
    profileBlock.classList.toggle("active");
    socialDiv.classList.toggle("show-social");
    contactDiv.classList.toggle("hide-contact");
});

