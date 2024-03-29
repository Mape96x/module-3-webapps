const todoList = document.querySelector("#todoList");
const addTodo = document.querySelector("#addTodo");
const addTodoBtn = document.querySelector("#addTodoBtn");
const filterList = document.querySelector("#filterList");
const rmvDone = document.querySelector("#rmvDone");
let counter = 0;
let todos = JSON.parse(localStorage.getItem("actualstate")) || [];
addTodoBtn.addEventListener("click", addObj);
filterList.addEventListener("change", filterObj);
rmvDone.addEventListener("click", removeDone);
document.addEventListener("keypress", addObjByEnter);

renderTodoList(todos);
function renderTodoList(arr) {
  todoList.innerText = "";
  for (const currentTodo of arr) {
    const newLiEl = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = currentTodo.done;
    checkbox.todo = currentTodo;

    checkbox.addEventListener("click", changeState);

    const label = document.createElement("label");
    label.textContent = currentTodo.description;

    newLiEl.appendChild(checkbox);
    newLiEl.appendChild(label);
    todoList.appendChild(newLiEl);
  }
}

function addObj() {
  const newTodo = {};
  const actualTodo = trimValue(addTodo.value);
  if (duplicateCheck(actualTodo) || !actualTodo.length > 0) {
    addTodo.value = "";
    addTodo.focus();
    return;
  }
  newTodo.description = addTodo.value;
  newTodo.done = false;
  todos.push(newTodo);
  renderTodoList(todos);
  addTodo.value = "";
  addTodo.focus();
  saveState();
}

function changeState(e) {
  const currentBox = e.target.todo;
  currentBox.done = !currentBox.done;
  saveState();
}

function saveState() {
  let stringState = JSON.stringify(todos);
  localStorage.setItem("actualstate", stringState);
}

function duplicateCheck(aDes) {
  for (const currentTodo of todos) {
    if (currentTodo.description === aDes) {
      return true;
    }
  }
  return false;
}

function filterObj(e) {
  let filteredTodo = [];
  if (e.target.id === "open" && e.target.checked) {
    for (const currentTodo of todos) {
      if (!currentTodo.done) {
        filteredTodo.push(currentTodo);
      }
    }
  }
  if (e.target.id === "all" && e.target.checked) {
    for (const currentTodo of todos) {
      filteredTodo.push(currentTodo);
    }
  }
  if (e.target.id === "done" && e.target.checked) {
    for (const currentTodo of todos) {
      if (currentTodo.done) {
        filteredTodo.push(currentTodo);
      }
    }
  }
  renderTodoList(filteredTodo);
}

function removeDone() {
  let filteredTodo = [];
  for (const currentTodo of todos) {
    if (!currentTodo.done) {
      filteredTodo.push(currentTodo);
    }
  }
  todos = filteredTodo;
  renderTodoList(todos);
  saveState();
}

function trimValue(input) {
  const trimmedInput = input.trim();
  return trimmedInput;
}
function addObjByEnter(e) {
  if (e.code === "Enter") {
    addObj();
  }
}
