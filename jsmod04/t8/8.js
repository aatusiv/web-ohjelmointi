
const button = document.getElementById("start");
button.addEventListener("click", () => {
  "use strict";
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const selection = document.getElementById('operation').value;
  console.log(num1, num2, selection)

  let result;

  switch(selection){
    case "add":
      result = num1 + num2;
      break;
    
    case "sub":
      result = num1 - num2;
      break;
    
    case "multi":
      result = num1 * num2;
      break;

    case "div":
      result = num1 / num2;
      break;

    default:
      console.log("Error with operation selection.");
  }
  console.log(result);
  document.querySelector("#result").textContent = `Result: ${result}`
});
