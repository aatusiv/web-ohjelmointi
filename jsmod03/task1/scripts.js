"use strict";

const numbers = [];
const reversedList = [];
for(let i = 0; i < 5; i++){
  const newNumber = parseInt(prompt(`Anna ${i+1} numero:`));
  numbers.push(newNumber);
};

for(let i = 0; i < 5; i++){
  reversedList.push(numbers.pop())
};
console.log(reversedList)