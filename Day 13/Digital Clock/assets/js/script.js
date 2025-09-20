/*------------------------------------------------
            60 Days of Coding Challenge
        Day 13: Project - Digital Clock
            Author: Pranto Bapary
------------------------------------------------*/

// Variables
const time = document.getElementById("time");
const date = document.getElementById("date");
const format24btn = document.getElementById("format24");
const format12btn = document.getElementById("format12");
let setTimeFormat;

// Function for generating current date and time
const updateDateTime = (hrFormat) => {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentTime = today
    .toLocaleTimeString("en-US", { hour12: hrFormat })
    .replace(/AM|PM/g, "")
    .trim();
  const currentDate = today.toLocaleString("en-US", options);
  time.textContent = currentTime;
  date.textContent = currentDate;
};

// Eventlistner for 24 hour time settings
format24btn.addEventListener("click", () => {
  format12btn.classList.remove("active");
  format24btn.classList.add("active");
  clearInterval(setTimeFormat);
  setTimeFormat = setInterval(updateDateTime, 1000, false);
});

// Eventlistner for 12 hour time settings
format12btn.addEventListener("click", () => {
  format12btn.classList.add("active");
  format24btn.classList.remove("active");
  clearInterval(setTimeFormat);
  setTimeFormat = setInterval(updateDateTime, 1000, true);
});

// Initializing the app by calling the functions
const initApp = () => {
  setTimeFormat = setInterval(updateDateTime, 1000, false);
};

// App Starts
initApp();
