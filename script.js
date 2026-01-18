/************** STATE **************/
let tasksData = {};

let todo = document.querySelector("#todo");
let progress = document.querySelector("#progress");
let done = document.querySelector("#done");

let newTask = document.querySelector("#toggle-modal");
let newTaskModal = document.querySelector(".modal");
let cancel = document.querySelector("#cancel");
let newTaskinTodo = document.querySelector(".new-task");

let dragElement = null;
let columns = [todo, progress, done];


/************** LOAD FROM LOCAL STORAGE **************/
if (localStorage.getItem("tasks")) {
  const data = JSON.parse(localStorage.getItem("tasks"));

  for (const col in data) {
    const colElement = document.querySelector(`#${col}`);
    if (!colElement) continue;

    data[col].forEach(task => {
      createTaskElement(task.title, task.des, colElement);
    });
  }

  updateData();
}


/************** DRAG EVENTS **************/
function dragEvents(col) {
  col.addEventListener("dragenter", () => col.classList.add("hovering"));

  col.addEventListener("dragleave", () => col.classList.remove("hovering"));

  col.addEventListener("dragover", e => e.preventDefault());

  col.addEventListener("drop", () => {
    if (dragElement) {
      col.appendChild(dragElement);
      updateData();
    }
    col.classList.remove("hovering");
  });
}

columns.forEach(dragEvents);


/************** MODAL **************/
newTask.addEventListener("click", () => {
  newTaskModal.classList.add("active");
});

cancel.addEventListener("click", () => {
  newTaskModal.classList.remove("active");
});


/************** ADD NEW TASK **************/
newTaskinTodo.addEventListener("click", e => {
  e.preventDefault();

  const titleInput = document.querySelector("#task-title");
  const descInput = document.querySelector("#task-description");

  const taskTitle = titleInput.value.trim();
  const taskDesc = descInput.value.trim();

  if (!taskTitle) return;

  createTaskElement(taskTitle, taskDesc, todo);
  updateData();

  titleInput.value = "";
  descInput.value = "";

  newTaskModal.classList.remove("active");
});


/************** CREATE TASK **************/
function createTaskElement(title, desc, parentColumn) {
  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("draggable", "true");

  div.innerHTML = `
    <div>
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
    <button class="delete-task">Delete</button>
  `;

  // drag
  div.addEventListener("dragstart", () => {
    dragElement = div;
  });

  div.addEventListener("dragend", () => {
    dragElement = null;
  });

  // delete
  div.querySelector(".delete-task").addEventListener("click", () => {
    div.remove();
    updateData();
  });

  parentColumn.appendChild(div);
}


/************** UPDATE DATA + COUNTS **************/
function updateData() {
  tasksData = {};

  columns.forEach(col => {
    const tasks = col.querySelectorAll(".task");
    const count = col.querySelector(".right");

    tasksData[col.id] = Array.from(tasks).map(task => ({
      title: task.querySelector("h2").innerText,
      des: task.querySelector("p").innerText
    }));

    if (count) count.innerText = tasks.length;
  });

  localStorage.setItem("tasks", JSON.stringify(tasksData));
  console.log(tasksData);
}
