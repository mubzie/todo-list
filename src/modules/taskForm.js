   import { task } from "./task";
   import { AddTaskFactory } from "./task";
   import { displayTask } from "./displayTask";

   //helper function
   const setAttribute = (elem, attri) =>{
    Object.entries(attri).forEach(([key, value]) => elem.setAttribute(key, value));
    }
  
   const addTaskForm = () => {
  
      const formContainer = document.createElement('div');
      formContainer.classList.add('form-container');
  
      const form = document.createElement('form')
      setAttribute(form, {'id': 'addTaskForm'})
      form.classList.add('task-form');
  
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
      dateLabel.textContent = 'title';
  
      const dateInput = document.createElement('input');
      setAttribute(dateInput, {'type': 'date', 'name': '', 'id': 'date'});
      dateDiv.append(dateLabel, dateInput);
  
      //priority input
      const priorityDiv = document.createElement('div');
      priorityDiv.classList.add('form-row');
  
      const priorityLabel = document.createElement('label');
      setAttribute(priorityLabel, {'for': 'priority'})
      priorityLabel.textContent = 'title';
  
      const prioritySelection = document.createElement('select');
      setAttribute(prioritySelection, {'name': '', 'id': 'priority'});
  
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
  
      const submitButton = document.createElement('button');
      submitButton.textContent = 'add task'
  
      setAttribute(submitButton, {'type': 'submit'});
      buttonDiv.append(submitButton);
  
      form.append(titleDiv, DescriptionDiv, dateDiv, priorityDiv, buttonDiv)
  
      formContainer.append(form);
      
      document.body.appendChild(formContainer);


    }
    addTaskForm();

    const addTaskFunction = (e) => {
      e.preventDefault();

      const titleInput = document.getElementById('title').value;
      const descriptionInput = document.getElementById('description').value;
      const dateInput = document.getElementById('date').value;
      const priorityInput = document.getElementById('priority').value;

      const task2 = AddTaskFactory(titleInput, descriptionInput, dateInput, priorityInput);
      task.push(task2);
      console.log(task);

      displayTask(task);

    }

    let addTask = document.getElementById('addTaskForm');

    addTask.addEventListener('submit', addTaskFunction);


export { addTaskForm };

