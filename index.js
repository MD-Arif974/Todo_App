let inputValue = document.querySelector(".todo-input");
let addBtn = document.querySelector("#addBtn");
let todoList = document.querySelector(".todo-list");

function addTask() {
    let val = inputValue.value;
  if (val === "") {
    alert("Please write something");
  } else {
    let liElem = document.createElement("li");
    liElem.innerHTML = val;
    todoList.appendChild(liElem);

    imgElem = document.createElement("img");
    imgElem.setAttribute("src", "delete.png");
    imgElem.setAttribute("alt", "Delete button");

    liElem.appendChild(imgElem);
    inputValue.value = "";
    saveData();
  }
}

addBtn.addEventListener("click", addTask);


todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
        
    }
    });


function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}

function showTask() {
  todoList.innerHTML = localStorage.getItem("data");
}

showTask();
