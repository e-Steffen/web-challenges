console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formInputs = new FormData(event.target);
  const singleData = Object.fromEntries(formInputs);
  if (singleData.operator === "addition") {
    result = add(
      parseInt(singleData.numberA, 10),
      parseInt(singleData.numberB, 10)
    );
  } else if (singleData.operator === "subtraction") {
    result = subtract(singleData.numberA, singleData.numberB);
  } else if (singleData.operator === "multiplication") {
    result = multiply(singleData.numberA, singleData.numberB);
  } else result = divide(singleData.numberA, singleData.numberB);

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
