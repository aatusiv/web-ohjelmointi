"use strict";
const num1 = prompt("Anna eka numero");
const num2 = prompt("Anna toka numero");
const num3 = prompt("Anna kolmas numero");

document.querySelector("#sum").innerHTML = "Numeroiden summa on: " + (parseInt(num1) + parseInt(num2) + parseInt(num3));
document.querySelector("#product").innerHTML = "Numeroiden tulo on: " + parseInt(num1) * parseInt(num2) * parseInt(num3);
document.querySelector("#average").innerHTML = "Numeroiden keskiarvo on: " + ( parseInt(num1) + parseInt(num2) + parseInt(num3) ) / 3;