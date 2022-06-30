import { task } from "./task";
import { AddTaskFactory } from "./task";
import { displayTask } from "./displayTask";
import '../styles/formStyle.css'


const addTaskBtn = document.getElementById('add-task-icon');
let addTask = document.getElementById('addTaskForm')
const closeFormBtn = document.getElementsByClassName('close-form-btn')[0];
let formModal = document.querySelector('.big-modal');


addTaskBtn.addEventListener('click', () => {
    formModal.classList.add('active');
    console.log('bro');
})

const closeForm = () => {
    formModal.classList.remove("active")
}

closeFormBtn.addEventListener('click', closeForm)

const addTaskFunction = (e) => {
        e.preventDefault();
  
        const titleInput = document.getElementById('title').value;
        const descriptionInput = document.getElementById('description').value;
        const dateInput = document.getElementById('date').value;
        const priorityInput = document.getElementById('priority').value;
  
        const task2 = AddTaskFactory(titleInput, descriptionInput, dateInput, priorityInput);
        task.push(task2);
        console.log(task);
  
        displayTask(task, task);
        closeForm();
  
}
  
addTask.addEventListener('submit', addTaskFunction);

export { addTaskFunction }



