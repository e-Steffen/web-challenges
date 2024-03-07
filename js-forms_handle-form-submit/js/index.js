console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formInputs = new FormData(event.target);
  const formData = Object.fromEntries(formInputs);
  console.log(formData);
  event.target.elements.firstName.focus();
});
