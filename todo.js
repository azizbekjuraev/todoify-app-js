`use strict`;

const inputEl = document.getElementById("todo--input");
const addBtn = document.getElementById("add--btn");
const deleteAll = document.querySelector(".delete--all");
const ul = document.querySelector(".todo--ul");
const allRights = document.querySelector(".all--rights");

let count = 1;
let todo = [];

//create date
const now = new Date();
const options = {
  hour: `numeric`,
  minute: `numeric`,
  day: `numeric`,
  month: `numeric`,
  year: `numeric`,
  //weekday: `long`,
};

const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const today = new Intl.DateTimeFormat(options).format(now);
let wDay = weekday[now.getDay()];

const parsed = JSON.parse(localStorage.getItem("todos"));
// console.log(parsed);

//Create button
function createTodo() {
  todo =
    ul.innerHTML += `<li class="li--text"> <h5 class="created">Created on: ${wDay} ${today} </h5>
${count++}. ${
      inputEl.value
    }<button class="edit--btn">EDIT</button>  <button class="delete--btn" >DELETE</button> </li>`;
  inputEl.value = "";
  localStorage.setItem("todos", JSON.stringify(todo));
}

//Delete todo
function deleteTodo() {
  const deleteBtn = document.querySelectorAll(".delete--btn");
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function () {
      this.parentNode.remove();
      if (ul.innerHTML === "") {
        count = 1;
        deleteAll.style.display = "none";
      }
      //   setTimeout(() => {
      //     alert(`Your todo was successfully deleted!`);
      //   }, "2000");
    };
  }
}

// deleteAllTodo
function deleteAllTodo() {
  deleteAll.style.display = "inline-block";
  deleteAll.addEventListener("click", () => {
    ul.innerHTML = "";
    if (ul.innerHTML === "") {
      count = 1;
      deleteAll.style.display = "none";
    }
  });
}

//Add button
addBtn.addEventListener("click", () => {
  if (!inputEl.value) {
    return;
  }
  createTodo();
  deleteTodo();
  deleteAllTodo();

  //edit button;
  const editBtn = document.querySelectorAll(".edit--btn");
  for (let i = 0; i < editBtn.length; i++) {
    editBtn[i].onclick = function () {};
  }
});

//Footer
allRights.innerHTML = `©️ ${now.getFullYear()} - all rights reserved`;
