let inputValue = document.querySelector(".todo-input");
let addBtn = document.querySelector("#addBtn");
let todoList = document.querySelector(".todo-list");
let todoListCnt = document.querySelector(".todo-list-container");

let clickLI = "";
console.log(typeof clickLI);
function addTask() {
  let val = inputValue.value;
  if (val === "") {
    alert("Please write something");
  } else {
    if (typeof clickLI === "object") {
      clickLI.innerText = val;

      imgElem = document.createElement("img");
      imgElem.setAttribute("src", "delete.png");
      imgElem.setAttribute("alt", "Delete button");

      clickLI.appendChild(imgElem);

      let editElem = document.createElement("button");
      editElem.setAttribute("class", "editBtn");
      editElem.innerText = "Edit";
      clickLI.appendChild(editElem);
      addBtn.innerText = "Add";
      clickLI = "";

    } else {
      console.log(clickLI);
      let liElem = document.createElement("li");
      liElem.innerHTML = val;
      todoList.appendChild(liElem);

      imgElem = document.createElement("img");
      imgElem.setAttribute("src", "delete.png");
      imgElem.setAttribute("alt", "Delete button");

      liElem.appendChild(imgElem);

      let editElem = document.createElement("button");
      editElem.setAttribute("class", "editBtn");
      editElem.innerText = "Edit";
      liElem.appendChild(editElem);
    }

    inputValue.value = "";
    saveData();
  }
}

addBtn.addEventListener("click", addTask);

todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "BUTTON") {
    inputValue.value = e.target.parentNode.innerText;
    addBtn.innerText = "Edit";
    clickLI = e.target.parentElement;
  }
});

function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}

function showTask() {
  todoList.innerHTML = localStorage.getItem("data");
}

showTask();
