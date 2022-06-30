   import { task } from "./task";
   import { AddTaskFactory } from "./task";
   import { displayTask } from "./displayTask";
   import '../styles/formStyle.css'

   //helper function
   const setAttribute = (elem, attri) =>{
    Object.entries(attri).forEach(([key, value]) => elem.setAttribute(key, value));
    }
  
   const addTaskForm = () => {
  
      const wrapperContainer = document.getElementById('form-display')

      const formContainer = document.createElement('div');
      formContainer.classList.add('form-container');
      formContainer.classList.add('big-modal');
      // formContainer.classList.add('active');

      const addOverlay = document.getElementById('add-task-icon');
      
      addOverlay.addEventListener('click', () => {
        formContainer.classList.add('active');
      });

      const overlay = document.createElement('div');
      overlay.classList.add('overlay')
  
      const form = document.createElement('form')
      setAttribute(form, {'id': 'addTaskForm'})
      form.classList.add('task-form');

      const taskHeader = document.createElement('div');
      taskHeader.classList.add('task-header');
      taskHeader.textContent = 'Add New Task';
  
      //task input
      const titleDiv = document.createElement('div');
      titleDiv.classList.add('form-row');
  
      const titleLabel = document.createElement('label');
      setAttribute(titleLabel, {'for': 'title'});
      titleLabel.textContent = 'title';
  
      const titleInput = document.createElement('input');
      setAttribute(titleInput, {'type': 'text', 'name': '', 'id': 'title', 'required': ''});
      titleDiv.append(titleLabel, titleInput);
  
      //task description input
      const DescriptionDiv = document.createElement('div');
      DescriptionDiv.classList.add('form-row')
  
      const DescriptionLabel = document.createElement('label');
      setAttribute(DescriptionLabel, {'for': 'description'});
      DescriptionLabel.textContent = 'description';
  
      const DescriptionInput = document.createElement('textarea');
      setAttribute(DescriptionInput, {'type': 'text', 'name': '', 'id': 'description', 'rows': '4', 'cols': '50'})
      DescriptionDiv.append(DescriptionLabel, DescriptionInput);
  
      //date input
      const dateDiv = document.createElement('div');
      dateDiv.classList.add('form-row');
  
      const dateLabel = document.createElement('label');
      setAttribute(dateLabel, {'for': 'date'})
      dateLabel.textContent = 'Date';
  
      const dateInput = document.createElement('input');
      setAttribute(dateInput, {'type': 'date', 'name': '', 'id': 'date'});
      dateDiv.append(dateLabel, dateInput);
  
      //priority input
      const priorityDiv = document.createElement('div');
      priorityDiv.classList.add('form-row');
  
      const priorityLabel = document.createElement('label');
      setAttribute(priorityLabel, {'for': 'priority'})
      priorityLabel.textContent = 'Priority';
  
      const prioritySelection = document.createElement('select');
      setAttribute(prioritySelection, {'type': 'text', 'name': '', 'id': 'priority'});
  
      let priorityOption = ["high","medium","low"];
  
      for (let i = 0; i < priorityOption.length; i++) {
          let option = document.createElement("option");
          setAttribute(option, {'vale': priorityOption[i]});
          option.textContent = priorityOption[i];
          prioritySelection.appendChild(option);
      } 
  
      priorityDiv.append(priorityLabel, prioritySelection);
  
      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('form-button');

      const cancelButton = document.createElement('button');
      cancelButton.classList.add('submit')
      cancelButton.textContent = 'cancel'
  
      const submitButton = document.createElement('button');
      submitButton.classList.add('submit')
      submitButton.textContent = 'add task'
  
      setAttribute(submitButton, {'type': 'submit'});
      buttonDiv.append(cancelButton, submitButton);
  
      form.append(taskHeader, titleDiv, DescriptionDiv, dateDiv, priorityDiv, buttonDiv)
  
      formContainer.append(overlay, form);
      
      wrapperContainer.appendChild(formContainer);

      document.body.appendChild(formContainer);

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
  
      }
  
      let addTask = document.getElementById('addTaskForm');
  
      addTask.addEventListener('submit', addTaskFunction);


    }


export { addTaskForm };

