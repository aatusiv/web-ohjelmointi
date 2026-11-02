'use strict';
const names = ['John', 'Paul', 'Jones'];


for(let x = 0; x<names.length; x++){
  const item = document.createElement("li");
  item.innerHTML = names[x]
  document.querySelector("#target").appendChild(item)

}