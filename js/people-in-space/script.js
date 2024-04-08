const grabPeopleNo = document.querySelector('[data-js="peopleNo"]');
const fetchButton = document.querySelector('[data-js="buttonToFetch"]');
const fetchButtonISS = document.querySelector('[data-js="filterISS"]');
const fetchButtonTiangong = document.querySelector('[data-js="filterTiangong"]');

// async function fetchAB() {
//   const response = await fetch("http://api.open-notify.org/astros.json");
//   const data = await response.json();
//   return data;
// }

// console.log("HIER: ", await fetchAB());

fetchButton.addEventListener("click", async () => {
  try {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    grabPeopleNo.textContent = `There are ${data.number} people in space right now.`;
    console.log(data);
    const namesList = document.createElement("ul");
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
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  grabPeopleNo.textContent = `There are ${data.number} people on ISS right now.`;
  const namesList = document.createElement("ul");

  data.people.filter((people) => {
    const namesListItems = document.createElement("li");
    if (people.craft === "ISS") {
      namesListItems.textContent = people.name;
      namesList.appendChild(namesListItems);
    }
  });
  document.body.appendChild(namesList);
});

fetchButtonTiangong.addEventListener("click", async () => {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  grabPeopleNo.textContent = `There are ${data.number} people on Tiangong right now.`;

  const namesList = document.createElement("ul");

  data.people.filter((people) => {
    console.log(people.craft);
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
