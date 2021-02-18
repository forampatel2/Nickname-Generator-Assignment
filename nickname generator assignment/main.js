// Nickname Generator

let nickname = ["' Crusher '" , "' the Scientist '" , "' Twinkle-toes '", "' the Coder '", "' the Jester '", "' the Sloth '", "' Quick-Silver '"];

// Variables for HTML Elements
let resultsDivEl = document.getElementById("results");
let firstNameEl = document.getElementById("firstName");
let lastNameEl = document.getElementById("lastName");
let randBtnEL = document.getElementById("random-btn");
let allBtnEL = document.getElementById("all-btn");

// Event Listeners
randBtnEL.addEventListener("click", generateRandBtn);
allBtnEL.addEventListener("click" , allNamesOut);

function generateRandBtn(){
    // Get first and last name
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;

    resultsDivEl.innerHTML = firstNameEl.value + " " + nickname[randomInt(0,7)] + " " + lastNameEl.value;
}

function allNamesOut(){
     let divStr = " ";
     for (let i = 0; i < nickname.length; i++) {
       divStr += firstNameEl.value + " " + nickname[i] + " " + lastNameEl.value;
    }
     resultsDivEl.innerHTML = divStr;
}

