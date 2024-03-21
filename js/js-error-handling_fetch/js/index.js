console.clear();

const userElement = document.querySelector(".user");
const errorMesaage = document.querySelector(".error");

async function getUser(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fetch doesn't work, please inspect the URLs!");
    }
    const json = await response.json();
    errorMesaage.innerText = "";
    return json.data;
  } catch (error) {
    errorMesaage.innerText = error.message;
    userElement.innerHTML = "";
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    userElement.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
      `;
  })
);
