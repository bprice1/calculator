// Calculator.

/**
 * Math functions below.
 */
const calc = {
  add: function add(a, b) {
    return Number(a) + Number(b);
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  mutliply: function multiply(a, b) {
    return a * b;
  },
  divide: function divide(a, b) {
    return a / b;
  },
  remainder: function remainder(a, b) {
    return a % b;
  }
};

/**
 * Listen for a submit event on form and log results.
 */

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");
const output = document.querySelector("output");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  /**
   * Get the values from the input fields.
   * Pass teh values in as arguments to the function.
   *  * TODO: Figure out how to dynamically call a function by name.
   * Display results.
   */
  console.log(num1.value, num2.value, select.value);
  console.log(calc.add(num1.value, num2.value));

  output.textContent = calc.add(num1.value, num2.value);
});
