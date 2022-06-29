// import svg from '../svg/delete-bin-fill.svg'

function displayTask(task) {

    let taskDisplay = '<div>'

    task.forEach((tas) => {

   taskDisplay += '<div class="task-wrapper">'

   taskDisplay += '<div class="task-con-1">'
   taskDisplay+= `<div>${tas.getTitle()}</div>`
   taskDisplay += '</div>'

   taskDisplay += '<div class="task-con-2">'
   taskDisplay+= `<div>${tas.getDescription()}</div>`
   taskDisplay += '</div>'

   taskDisplay += '<div class="task-con-3">'
   taskDisplay+= `<div style="font-size: 16px">${tas.getDueDate()}</div>`
   taskDisplay+= `<div>${tas.getPriority()}</div>`
   taskDisplay+= `<div class="icon-btn delBtn"></div>`
   taskDisplay += '</div>'

   taskDisplay += '</div>'


    });
    taskDisplay+='</div>'

  
    document.querySelector('.task-display').innerHTML = taskDisplay;
}

const deleteTask = document.querySelector('.delBtn');
console.log(deleteTask);

export { displayTask };