"use strict";


const yearNumber = prompt("Give a year");
if (parseInt(yearNumber) % 400 == 0){
  document.querySelector("#target").innerHTML = yearNumber + " on karkausvuosi.";
} else if (parseInt(yearNumber) % 100 == 0) {
  document.querySelector("#target").innerHTML = yearNumber + " ei ole karkausvuosi.";
} else if (parseInt(yearNumber) % 4 == 0){
  document.querySelector("#target").innerHTML = yearNumber + " on karkausvuosi.";
} else {
  document.querySelector("#target").innerHTML = yearNumber + " ei ole karkausvuosi.";
}
