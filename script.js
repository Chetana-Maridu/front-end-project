function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  // Mark as done on click
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // Right-click to delete
  li.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
