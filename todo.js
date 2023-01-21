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
let wDay = weekday[now.getDay()];

const today = new Intl.DateTimeFormat(options).format(now);
const parsed = JSON.parse(localStorage.getItem("todos"));
// console.log(parsed);

addBtn.addEventListener("click", () => {
  if (!inputEl.value) {
    return;
  }

  todo =
    ul.innerHTML += `<li class="li--text"> <h5 class="created">Created on: ${wDay} ${today} </h5>
${count++}. ${
      inputEl.value
    } <button class="delete--btn" >DELETE</button> </li>`;
  inputEl.value = "";

  localStorage.setItem("todos", JSON.stringify(todo));

  // delete todo
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

  //delete all todos
  deleteAll.style.display = "inline-block";
  deleteAll.addEventListener("click", () => {
    ul.innerHTML = "";
    if (ul.innerHTML === "") {
      count = 1;
      deleteAll.style.display = "none";
    }
  });
});

allRights.innerHTML = `©️ 2023 - all rights reserved`;
