const form = document.querySelector("#taskForm");
const taskInput = document.querySelector("#task");
const prioritySelection = document.querySelector("#priority");
const listContainer = document.querySelector("#taskList");
const errorMessage = document.querySelector("#taskError");
const statusMessage = document.querySelector("#status");
const nameInput = document.querySelector("#userName");
const nameButton = document.querySelector("#nameButton");
const darkModeButton = document.querySelector("#darkModeButton");
const greeting = document.querySelector("#greeting");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskName = taskInput.value.trim();
    const taskPriority = prioritySelection.value;

    if (taskName === "") {
        errorMessage.textContent = "Please enter a task";
        return;
    }

    errorMessage.textContent = "";

    const newTask = document.createElement("li");
    newTask.textContent = taskName + " - Priority: " + taskPriority;
    listContainer.appendChild(newTask);

    const taskCount = listContainer.children.length;
    statusMessage.textContent = "Status: You have " + taskCount + " task(s) on your list";

    taskInput.value = "";
});

nameButton.addEventListener("click", () => {
    const userName = nameInput.value.trim();

    if (userName !== "") {
        greeting.textContent = "Welcome back to your Dashboard " + userName;
        nameButton.style.display = "none";
        nameInput.style.display = "none";
    }
});

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

