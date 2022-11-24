function setAlarm() {
  const reloj = document.querySelector("#alarmSet");
  const seconds = parseInt(reloj.value);
  const miliseconds = seconds * 1000.0;

  setTimeout(playAlarm, miliseconds);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
