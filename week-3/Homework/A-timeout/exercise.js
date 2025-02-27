/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
let div = document.querySelector("#main");

function changeColor(element, color) {
  element.style.backgroundColor = color;
}
//setTimeout(() => changeColor(div, "red"), 5000);
function AlternateColor() {
  const color = div.style.backgroundColor;
  if (color === "red") {
    div.style.backgroundColor = "blue";
  } else {
    div.style.backgroundColor = "red";
  }
}

setInterval(AlternateColor, 1000);
