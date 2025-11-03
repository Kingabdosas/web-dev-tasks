class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }
}

const tasks = [];
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function render() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.description;
    if (task.completed) li.classList.add("completed");

    li.onclick = () => {
      task.completed = !task.completed;
      render();
    };

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      render();
    };

    li.appendChild(del);
    list.appendChild(li);
  });
}

addBtn.onclick = () => {
  if (input.value.trim() !== "") {
    tasks.push(new Task(input.value.trim()));
    input.value = "";
    render();
  }
};
