/*---------------------------------------------------------------------
                    60 Days of Coding Challenge
    Day 14 - Project: Weather App with Local Storage Feature
                    Author: Pranto Bapary
---------------------------------------------------------------------*/

// Variables
const searchInput = document.querySelector(".search-field");
const searchButton = document.querySelector(".search-button");
const cityName = document.querySelector(".city-name");
const dateTime = document.querySelector(".date-time");
const temperature = document.querySelector(".temperature");
const weatherStatus = document.querySelector(".weather-status");
const weatherIcon = document.querySelector(".weather-icon");
const detailValue = document.querySelectorAll(".detail-value");
const recentList = document.querySelector(".recent-list");
const recentCity = document.querySelector(".city");
const copyrightYear = document.querySelector(".copyright-year");

// Function for Calculating Current Day, Month, Date and Year
const updateDate = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fullDate = date.toLocaleDateString("en-US", options);
  dateTime.innerHTML = fullDate;
  copyrightYear.innerHTML = date.getFullYear();
};

// Function for Fetching Realtime Weather Data from OpenWeatherMap API
const updateWeatherData = (city) => {
  const requestURL = `/api/weather?city=${city}`;
  fetch(requestURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // If the Value is Found then Set the Data to Fetched Data.
      if (data.cod === 200) {
        cityName.textContent = data.name;
        temperature.textContent = Math.ceil(data.main.temp);
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherStatus.textContent = data.weather[0].main;
        detailValue[0].textContent = `${(data.wind.speed * 3.6).toFixed(
          1
        )} km/h`;
        detailValue[1].textContent = `${data.main.humidity}%`;
        detailValue[2].textContent = `${data.main.pressure} hPa`;
        detailValue[3].textContent = `${data.visibility / 1000} km`;
      } else {
        // If the City isn't Found then All the Values Will Be 0
        cityName.innerHTML = "City Not Found.<br> Try Another City";
        temperature.textContent = "0";
        weatherStatus.textContent = "Not found";
        detailValue[0].textContent = "0 km/h";
        detailValue[1].textContent = "0 %";
        detailValue[2].textContent = "0 hPa";
        detailValue[3].textContent = "0 km";
      }
    })
    .catch((err) => {
      // If Any Error Occurs It Can Be Seen in the Logs.
      console.log("Error: ", err);
    });
};

// Search Functionaly
searchButton.addEventListener("click", () => {
  const searchedCity = searchInput.value.trim();
  // Validating Searches and Then Showing the Weather Updates
  if (/^[A-Za-z\s]+$/.test(searchedCity)) {
    updateDate();
    updateWeatherData(searchedCity);
    loadAnimations();
    createListItem(searchedCity);
    saveCities();
    // Setting the border and placeholder to default and clearing input field
    searchInput.style.border = "none";
    searchInput.placeholder = "Search for a city...";
    searchInput.value = "";
  } else {
    // If User Tries to Leave the Field Empty or the Length < 5
    searchInput.style.border = "1px solid rgba(255, 0, 0, 0.5)";
    searchInput.placeholder = "Enter a valid city...";
    searchInput.focus();
  }
});

// Recent Search Cities Delete
recentList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (li && !li.classList.contains("empty-state")) {
    li.remove();
    saveCities();
  }
});

// Load Animations
const loadAnimations = () => {
  const animationItems = [
    cityName,
    temperature,
    detailValue[0],
    detailValue[1],
    detailValue[2],
    detailValue[3],
  ];
  animationItems.forEach((item) => {
    item.classList.add("animation");
  });
};

// Creating List Item after Searching a City
const createListItem = (city) => {
  const li = document.createElement("li");
  li.className = "recent-item";
  li.innerHTML = `
  <span class="city">${city}</span>
  <span class="delete-btn"><i class="fas fa-times"></i></span>
  `;
  recentList.appendChild(li);
};

// Show or Hide Empty States
const emptyState = () => {
  const emptyList = recentList.querySelector(".empty-state");
  const hasCities =
    recentList.querySelectorAll("li:not(.empty-state)").length > 0;
  if (emptyList && hasCities) {
    // Hides if Recent List has cities stored
    emptyList.remove();
  } else if (!emptyList && !hasCities) {
    // Adds if Recent list has no values
    const li = document.createElement("li");
    li.className = "empty-state";
    li.innerHTML = `<span class="city">No recent searches...</span>`;
    recentList.appendChild(li);
  }
};

// Save Recent Seached Cities to LocalStorage
const saveCities = () => {
  let cities = [];
  recentList.querySelectorAll("li:not(.empty-state)").forEach((li) => {
    cities.push(li.children[0].textContent);
  });
  localStorage.setItem("city", JSON.stringify(cities));
  emptyState();
};

// Load Recent Seached Cities from LocalStorage
const loadCities = () => {
  const cities = JSON.parse(localStorage.getItem("city")) || [];
  cities.forEach((city) => {
    createListItem(city);
  });
  emptyState();
};

// Initializing App with Default Location
const initApp = (city) => {
  updateDate();
  updateWeatherData(city);
  loadAnimations();
  loadCities();
};

// Starting the App with Default Location Dhaka
initApp("Dhaka");
