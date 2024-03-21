console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorMessage = document.querySelector(".error");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  try {
    errorMessage.innerText = "";
    const result = operations[operation](firstNumber, secondNumber);
    output.innerText = result;
  } catch (error) {
    errorMessage.innerText =
      "Please pass a number rather than 0 as divisor, thank you!";
    output.innerText = "";
  }
});
