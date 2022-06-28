function displayTask(task) {

    let taskDisplay = '<div>'

    task.forEach((tas) => {

   taskDisplay += '<div>'

   taskDisplay+= `<div>${tas.getTitle()}</div>`
   taskDisplay+= `<div>${tas.getDescription()}</div>`
   taskDisplay+= `<div>${tas.getDueDate()}</div>`
   taskDisplay+= `<div>${tas.getPriority()}</div>`

   taskDisplay += '</div>'


    });
    taskDisplay+='</div>'

  
    document.querySelector('.task-display').innerHTML = taskDisplay;
}

export { displayTask };