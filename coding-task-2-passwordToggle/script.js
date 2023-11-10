const btn = document.querySelector("button");
const inp = document.querySelector("input");

btn.addEventListener("click", function () {
  if (inp.type === "text") {
    inp.setAttribute("type", "password");
  } else if (inp.type === "password") {
    inp.setAttribute("type", "text");
  }

  if (inp.type === "text") {
    btn.textContent = "Hide Password";
  } else if (inp.type === "password") {
    btn.textContent = "Show Password";
  }
});
