"use strict";

let btnShare = document.getElementById("share");
let bgShare = document.querySelector(".share-img")
let profileBlock = document.querySelector(".profile");
let socialDiv = document.querySelector(".social");
let contactDiv = document.querySelector(".contact");

btnShare.addEventListener("click", ()=> { 
    bgShare.classList.toggle("bg-share-img");
    profileBlock.classList.toggle("active");
    socialDiv.classList.toggle("show-social");
    contactDiv.classList.toggle("hide-contact");
});