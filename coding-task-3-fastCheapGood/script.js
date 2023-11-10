const list = document.querySelector("ul");
const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
const arr = [];

list.addEventListener("click", function (checkbox) {
  arr.push(checkbox.target.id);
  if (fast.checked && cheap.checked && good.checked) {
    if (arr[arr.length - 2] === "good") {
      good.checked = false;
    } else if (arr[arr.length - 2] === "cheap") {
      cheap.checked = false;
    } else {
      fast.checked = false;
    }
  }
});
