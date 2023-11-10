const btn = document.querySelector("button");
const inp = document.querySelector("input");

btn.addEventListener("click", function () {
  if (inp.type === "text") {
    inp.type = "password";
    btn.textContent = "Hide Password";
  } else if (inp.type === "password") {
    inp.type = "text";
    btn.textContent = "Show Password";
  }
});
