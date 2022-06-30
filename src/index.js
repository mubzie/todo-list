import { addTaskForm } from "./modules/taskForm";
import { displayTask } from "./modules/displayTask";

const addTaskBtn = document.getElementById('add-task-icon');

addTaskBtn.addEventListener('click', addTaskForm)

// document.body.appendChild(addTaskForm());