/*--------------------------------------------------------------
                60 Days of Coding Challenge
        Day 13 - setInterval, setTimeout, clearInterval
                Author: Pranto Bapary
-------------------------------------------------------------*/
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

const changeColor = () => {
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 16);
    color += hex[randomNumber];
  }
  document.body.style.backgroundColor = color;
};

const giveAlert = () => {
  alert(
    "Colors will be changed in every seconds, chill!!!\nPress stop if you don't want."
  );
};

let changeColorInSeconds;
startBtn.addEventListener("click", () => {
  if (!changeColorInSeconds) {
    setTimeout(giveAlert, 2000);
    changeColorInSeconds = setInterval(changeColor, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  startBtn.style.opacity = "1";
  clearInterval(changeColorInSeconds);
  alert("Stopped successfully!!!");
  changeColorInSeconds = null;
});
