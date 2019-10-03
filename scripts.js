// Calculator.

/**
 * Math functions below.
 */
const calc = {
  add(a, b) {
    return Number(a) + Number(b);
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  remainder(a, b) {
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

form.addEventListener("submit", event => {
  event.preventDefault();

  /**
   * Get the values from the input fields.
   * Pass teh values in as arguments to the function.
   *  * TODO: Figure out how to dynamically call a function by name.
   * Display results.
   */

  // const num1 = num1.value;
  // const num2 = num2.value;
  // const operation = select.value;

  // output.textContent = calc[operation](num1, num2);

  output.textContent = calc[select.value](num1.value, num2.value);
});
