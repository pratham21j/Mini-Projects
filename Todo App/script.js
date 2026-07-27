document.addEventListener("DOMContentLoaded", () => {
  // Step 1
  const TodoInput = document.getElementById("todo-input");
  const AddTaskButton = document.getElementById("add-task-btn");
  const TodoList = document.getElementById("todo-list");

  // Step 2
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  tasks.forEach((task) => renderTask(task));

  AddTaskButton.addEventListener("click", () => {
    const taskText = TodoInput.value.trim();

    if (taskText === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);

    TodoInput.value = "";
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span>${task.text}</span>
      <button>delete</button>
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;

      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();

      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });

    TodoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});