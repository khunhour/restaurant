import { displayNav, displayHome, displayFooter } from "./home";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";

displayNav();
displayHome();
displayFooter();
attachEventListener();
const tab = document.querySelector("#home");
tab.classList.add('underline');

function displayPage(e){
    wipePage();
    displayNav();

    const tab = document.querySelector(`#${e.target.id}`);
    tab.classList.add('underline');
    
    attachEventListener();

    if(e.target.id === "home"){
        displayHome();
    }
    else if(e.target.id === "menu"){
        displayMenu();
    }
    else if(e.target.id === "contact"){
        displayContact();
    }
    displayFooter();
}

function removeClass(){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) =>{
        tab.classList.remove("underline");
    });
}

function attachEventListener(){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) =>{
        tab.addEventListener("click", displayPage);
    });
}

function wipePage(){
    const content = document.querySelector("#content");
    content.textContent = "";
}