console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccess() {
  success.setAttribute("hidden", "");
}

hideSuccess();

function showSuccess() {
  success.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", (event) => {
  if (event.target.checked === true) {
    hideTosError();
    showSuccess();
  } else {
    showTosError();
    hideSuccess();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  // const formElements = ;

  if (event.target.elements.tos.checked === false) {
    showTosError();
  } else {
    hideTosError();
    alert("Form submitted");
  }

  // --^-- write your code here --^--
});
