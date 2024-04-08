const grabPeopleNo = document.querySelector('[data-js="peopleNo"]');
const fetchButton = document.querySelector('[data-js="buttonToFetch"]');
const fetchButtonISS = document.querySelector('[data-js="filterISS"]');
const fetchButtonTiangong = document.querySelector(
  '[data-js="filterTiangong"]'
);

async function fetchData() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();

  const namesList = document.createElement("ul");

  fetchButton.addEventListener("click", async () => {
    namesList.textContent = "";
    try {
      grabPeopleNo.textContent = `There are ${data.number} people in space right now.`;
      data.people.map((people) => {
        const namesListItems = document.createElement("li");
        namesListItems.textContent = people.name;
        namesList.appendChild(namesListItems);
      });
      document.body.appendChild(namesList);
    } catch (error) {
      console.error("Error fetching data: ", error);
      grabPeopleNo.textContent = `Error fetching data: ${error}`;
    }
  });

  fetchButtonISS.addEventListener("click", async () => {
    grabPeopleNo.textContent = `There are ${data.number} people on ISS right now.`;
    namesList.textContent = "";
    data.people.filter((people) => {
      const namesListItems = document.createElement("li");
      if (people.craft === "ISS") {
        namesListItems.textContent = people.name;
        namesList.appendChild(namesListItems);
      } else {
        grabPeopleNo.textContent = `There are nobody on ISS right now.`;
      }
    });
    document.body.appendChild(namesList);
  });

  fetchButtonTiangong.addEventListener("click", async () => {
    grabPeopleNo.textContent = `There are ${data.number} people on Tiangong right now.`;
    namesList.textContent = "";
    data.people.filter((people) => {
      const namesListItems = document.createElement("li");
      if (people.craft === "Tiangong") {
        namesListItems.textContent = people.name;
        namesList.appendChild(namesListItems);
      } else {
        grabPeopleNo.textContent = `There are nobody on Tiangong right now.`;
      }
    });
    document.body.appendChild(namesList);
  });
}
fetchData();
