"use strict";
const usersName = prompt("Give your name: ")

let number = Math.floor(Math.random() * 4) + 1

switch(number) {

  case 1:
    document.querySelector("#target").innerHTML = usersName + ", you are Gryffindor."
    break;
  case 2:
    document.querySelector("#target").innerHTML = usersName + ", you are Slytherin."
    break;
  case 3:
    document.querySelector("#target").innerHTML = usersName + ", you are Hufflepuff."
    break;
  case 4:
    document.querySelector("#target").innerHTML = usersName + ", you are Ravenclaw."
    break;
  default:
    console.log("Error generating a number.")
}