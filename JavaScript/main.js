"use strict";

//selects the elements that will be modified
let btnShare = document.getElementById("share");
let bgShare = document.querySelector(".share-img")
let profileBlock = document.querySelector(".profile");
let socialDiv = document.querySelector(".social");
let contactDiv = document.querySelector(".contact");

//when clicked adds/removes the classes necessary to the effects
btnShare.addEventListener("click", ()=> { 
    bgShare.classList.toggle("bg-share-img");
    profileBlock.classList.toggle("active");
    socialDiv.classList.toggle("show-social");
    contactDiv.classList.toggle("hide-contact");
});