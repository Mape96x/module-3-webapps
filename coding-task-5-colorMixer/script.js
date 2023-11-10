const head = document.querySelector("#colorHead");
const hex = document.querySelector("#setHex");
const main = document.querySelector("#colorMain");
const bod = document.querySelector("body");
const i1 = document.getElementById("i1").value;
const i2 = document.getElementById("i2").value;
const i3 = document.getElementById("i3").value;

head.style.background = "rgb(" + [255, 255, 255, 0.75].join(",") + ")";
bod.style.background = "rgb(" + [i1, i2, i3].join(",") + ")";
rgbToHex(i1, i2, i3);
head.addEventListener("click", function () {
  const a1 = document.getElementById("i1").value;
  const a2 = document.getElementById("i2").value;
  const a3 = document.getElementById("i3").value;
  head.style.background = "rgb(" + [255, 255, 255, 0.75].join(",") + ")";
  bod.style.background = "rgb(" + [a1, a2, a3].join(",") + ")";
  rgbToHex(a1, a2, a3);
});

// function rgbToHex(r, g, b) {
//   r = r.toString(16);
//   g = g.toString(16);
//   b = b.toString(16);

//   if (r.length == 1) r = "0" + r;
//   if (g.length == 1) g = "0" + g;
//   if (b.length == 1) b = "0" + b;

//   hex.innerText = "#" + r + g + b;
// }

function rgbToHex(r, g, b) {
  hex.innerText =
    "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
