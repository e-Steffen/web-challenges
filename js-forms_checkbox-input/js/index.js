console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", (event) => {
  if (event.target.checked == true) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  // const formElements = ;

  if (event.target.elements.tos.checked == false) {
    showTosError();
  } else {
    hideTosError();
    alert("Form submitted");
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});