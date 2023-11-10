const counter = document.querySelector("#grow");
const clickField = document.querySelector("#clickMain");
const btnReset = document.querySelector("#reset");
let number = 0;
let verlauf = 0;

clickField.addEventListener("click", function () {
  number += 1;
  verlauf += 1;
  counter.innerText = number;
  clickField.style.background =
    "linear-gradient(90deg, yellow " + verlauf + "%, white " + verlauf + "%";

  if (number % 100 == 0) {
    verlauf = 0;
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key === "Enter" || e.code === "Space") {
    number += 1;
    verlauf += 1;
    counter.innerHTML = number;
    clickField.style.background =
      "linear-gradient(90deg, yellow " + verlauf + "%, white " + verlauf + "%";
  }
  if (number % 100 == 0) {
    verlauf = 0;
  }
});

btnReset.addEventListener("click", function () {
  number = 0;
  verlauf += 1;
  counter.innerHTML = number;
  clickField.style.background =
    "linear-gradient(90deg, yellow " + verlauf + "%, white " + verlauf + "%";
  if (number % 100 == 0) {
    verlauf = 0;
  }
});
