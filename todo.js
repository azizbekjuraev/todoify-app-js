`use strict`;

const inputEl = document.getElementById("todo--input");
const addBtn = document.getElementById("add--btn");
const ul = document.querySelector(".todo--ul");

let count = 1;

addBtn.addEventListener("click", () => {
  if (!inputEl.value) {
    return;
  }
  if (inputEl.value === "") {
  }

  ul.innerHTML += `<h3 class="created">created: wed, 2023 </h3> <li>${count++}.  ${
    inputEl.value
  } <button class="delete--btn" >DELETE</button> </li>`;
  inputEl.value = "";

  // delete todo
  let deleteBtn = document.querySelectorAll(".delete--btn");
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function () {
      this.parentNode.remove();

      if (ul.innerHTML === "") {
        count = 1;
      }
    };
  }
});
