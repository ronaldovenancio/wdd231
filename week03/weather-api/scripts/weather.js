// select HTML elements in the document
//const currentTemp = document.querySelector('#curret-temp');
//const weatherIcon = document.querySelector('#weather-icon');
//const captionDesc = document.querySelector('figcaption');
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');


// CREATE REQUIRED VARIABLES FOR THE URL
const myKey = "8191049f8b9fbcbf128a13964ad3426c";
const myLat = "49.7498219849936";
const myLong = "6.642236524752449";

const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// TRY TO GRAB THE CURRENT WEATHER DATA

async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

// DISPLAY THE JSON DATA ON MY WEB PAGE

function displayResults(data) {
  console.log("hello");
  myTown.innerHTML = data.name;
  myDescription.innerHTML = data.weather[0].description;
  myTemperature.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  myGraphic.setAttribute("SRC", iconsrc);
  myGraphic.setAttribute("alt", data.weather[0].description);
}