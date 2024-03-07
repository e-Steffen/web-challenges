console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formInputs = new FormData(event.target);
  const formData = Object.fromEntries(formInputs);
  console.log(formData);
  // this is a solution with more code:
  //   const ageValue = formData.age;
  //   const badnessValue = formData.badness;
  console.log(parseInt(formData.age, 10) + parseInt(formData.badness, 10));
  event.target.elements.firstName.focus();
  event.target.reset();
});
