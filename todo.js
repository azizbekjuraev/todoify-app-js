`use strict`;

const inputEl = document.getElementById("todo--input");
const addBtn = document.getElementById("add--btn");
const ul = document.querySelector(".todo--ul");

let count = 1;

//create date
const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let d = new Date();
let day = weekday[d.getDay()];

const now = new Date();
const options = {
  hour: `numeric`,
  minute: `numeric`,
  day: `numeric`,
  month: `numeric`,
  year: `numeric`,
  //weekday: `long`,
};

const today = new Intl.DateTimeFormat(options).format(now);

addBtn.addEventListener("click", () => {
  //created time;

  if (!inputEl.value) {
    return;
  }

  ul.innerHTML += `<li class="li--text"> <h5 class="created">Created on: ${day} ${today} </h5>
  ${count++}. ${
    inputEl.value
  } <button class="delete--btn" >DELETE</button> </li>`;
  inputEl.value = "";

  // delete todo
  const deleteBtn = document.querySelectorAll(".delete--btn");

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function () {
      this.parentNode.remove();
      if (ul.innerHTML === "") {
        count = 1;
      }
    };
  }
});
