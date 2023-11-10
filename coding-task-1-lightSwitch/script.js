const btn = document.querySelector("button");
const bod = document.querySelector("body");

btn.addEventListener("click", function () {
  btn.classList.toggle("btnClick");
  bod.classList.toggle("bodyClick");
  if (document.title === "Good Morning") {
    document.title = "Good Night";
    console.log(document.title);
  } else if (document.title === "Good Night") {
    document.title = "Good Morning";
  }
});
