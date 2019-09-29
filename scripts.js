// Calculator.

/**
 * Math functions below.
 */

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

/**
 * Listen for a submit event on form and log results.
 */

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  console.log("Submitted");
});
