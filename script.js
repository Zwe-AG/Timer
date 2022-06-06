document.getElementById("toggle").addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.toggle("dark-theme");
});

let hourWatchTag = document.getElementById("hourWatch");
let minWatchTag = document.getElementById("minWatch");
let secondWatchTag = document.getElementById("secondWatch");
let miliTag = document.getElementById("millisecondsWatch");
let startBtnTag = document.getElementsByClassName("startBtn")[0];
let pauseBtntag = document.getElementsByClassName("pauseBtn")[0];
let continueBtnTag = document.getElementsByClassName("continueBtn")[0];
let restartBtnTag = document.getElementsByClassName("restartBtn")[0];

let minutes = 59,
  seconds = 50,
  hours = 0,
  mili = 0;

let startTime = () => {
  mili += 1;
  if (mili === 1000) {
    mili = 0;
    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }
    }
  }
  let hoursText = hours < 10 ? "0" + hours.toString() : hours;
  let minutesText = minutes < 10 ? "0" + hours.toString() : minutes;
  let secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
  let miliText = mili <= 100 ? "0" + mili.toString() : mili;
  hourWatchTag.textContent = hoursText;
  minWatchTag.textContent = minutesText;
  secondWatchTag.textContent = secondsText;
  miliTag.textContent = miliText;
};

let intervalId;
startBtnTag.addEventListener("click", () => {
  intervalId = setInterval(startTime, 1);
});

pauseBtntag.addEventListener("click", () => {
  clearInterval(intervalId);
});

continueBtnTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1);
});

restartBtnTag.addEventListener("click", () => {
  clearInterval(intervalId);
  (seconds = 0), (minutes = 0), (hours = 0), (mili = 0);
  intervalId = setInterval(startTime, 1);
});
