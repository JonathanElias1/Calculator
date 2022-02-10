let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let reset = document.getElementById(`reset`);

let sumEL = document.getElementById(`sum-el`);
function add() {
  a = num1 + num2;
  sumEL.textContent = "Result: " + a;
}

function subtract() {
  a = num1 - num2;
  sumEL.textContent = "Result: " + a;
}

function multiply() {
  a = num1 * num2;
  sumEL.textContent = "Result: " + a;
}

function divide() {
  a = num1 / num2;
  sumEL.textContent = "Result: " + a;
}
