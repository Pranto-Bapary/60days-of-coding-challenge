/*------------------------------------------------
                60 Days of Coding Challenge
          Day 11 - JavaScript Project - Task Manager
                Author: Pranto Bapary
------------------------------------------------*/

// Variables
const taskContainer = document.querySelector(".tasks-container");
const addButton = document.getElementById("add-btn");
const emptyState = document.getElementById("empty-state");
const updateIcon = document.getElementById("plus");
const tasksRemaining = document.getElementById("task-remaining");
const clearTasks = document.getElementById("clear-task");
let taskCount = 0;

/*----------------------------
        Event Listeners
----------------------------*/

// Add Functionality
addButton.addEventListener("click", (e) => {
  createNewTask();
  if (taskCount > 0) {
    emptyState.classList.add("active");
  }
  tasksRemainingFunction(taskCount);
  clearInput();
});

// Remove Functionality
taskContainer.addEventListener("click", (e) => {
  if (e.target.matches(".fa-trash-alt")) {
    if (confirm("Do you want to delete the task?") == true) {
      removeTask(e);
    }
  }
});

// Clear all of the tasks at once
clearTasks.addEventListener("click", () => {
  if (taskCount === 0) {
    alert("No tasks to clear");
  } else {
    alert("Are you sure you want to clear all completed tasks?");
    taskContainer.innerHTML = null;
    taskCount = 0;
    tasksRemainingFunction(taskCount);
    taskContainer.appendChild(emptyState)
    emptyState.classList.remove('active')
  }
});

// Update Functionality
taskContainer.addEventListener("click", (e) => {
  if (e.target.matches(".fa-edit")) {
    updateTask(e);
  }
});

/*----------------------------
        Functions
----------------------------*/

// Add New Tasks Function
const createNewTask = () => {
  let taskInputValue = document.getElementById("taskInput").value;
  const newTask = document.createElement("div");

  newTask.classList.add("task");
  newTask.innerHTML = ` <input type="checkbox">
    <span class="task-text">${taskInputValue}</span>
    <div class="task-actions">
        <button class="edit-btn"><i class="fas fa-edit"></i></button>
        <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
    </div>
    `;

  // Form Validation
  if (
    (taskInputValue !== "" && taskInputValue.length > 4) ||
    taskInputValue === null
  ) {
    taskCount++;
    taskContainer.appendChild(newTask);
  } else {
    let taskInput = document.getElementById("taskInput");
    taskInput.placeholder = "Enter a valid task...";
    taskInput.classList.add("active");
    taskInput.focus();
  }
};

// Remove Tasks Function
const removeTask = (e) => {
  const currentTask = e.target.parentElement.parentElement.parentElement;
  taskContainer.removeChild(currentTask);
  taskCount--;
  if (taskCount === 0) {
    emptyState.classList.remove("active");
  }
  tasksRemainingFunction(taskCount);
};

// Update Tasks Function
const updateTask = (e) => {
  const updatedTaskName = prompt("Enter your updated task...");
  e.target.parentElement.parentElement.parentElement.children[1].innerHTML =
    updatedTaskName;
};

// Clear Input Field Function
const clearInput = () => (document.getElementById("taskInput").value = "");

// Tasks Remaining Function
const tasksRemainingFunction = (taskCount) => {
  tasksRemaining.innerText = `${taskCount} ${
    taskCount > 0 ? "tasks" : "task"
  } remaining`;
};

