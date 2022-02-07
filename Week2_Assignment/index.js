let item = document.getElementById("new-item");
let list = document.getElementById("list");

function newItem(toDo) {
  var toDoItem = `<li>
                
                <p class="item">${toDo}</p>
                <i class="fa fa-trash" job="delete"></i>
            </li>`;

  const position = "beforeend";
  list.insertAdjacentHTML(position, toDoItem);
}

function addItem() {
  let toDo = item.value;
  if (toDo) {
    newItem(toDo);
    item.value = "";
  }
}

//Press enter to add ToDo
item.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let toDo = item.value;
    if (toDo) {
      newItem(toDo);
      item.value = "";
    }
  }
});

//delete task
list.addEventListener("click", function (event) {
  let element = event.target; //<i class="fa fa-trash" job="delete"></i>
  const deleteJOB = event.target.attributes.job.value; //delete completed task
  if (deleteJOB === "delete") {
    removeToDo(element);
  }
});

// remove to do
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
}

// CLICK A TARGET ITEM TO STRIKE THROUGH
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("strike-through");
    }

    if (ev.target.tagName === "P") {
      ev.target.parentNode.classList.toggle("strike-through");
    }
  },
  false
);
