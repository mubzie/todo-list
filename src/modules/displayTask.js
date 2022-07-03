function displayTask(task, i) {

    let taskDisplay = '<div>'

    task.forEach((tas) => {

   taskDisplay += '<div class="task-wrapper">'

   taskDisplay += '<div class="task-con-1">'
   taskDisplay+= `<div class="title">${tas.title}</div>`
   taskDisplay += '</div>'

   taskDisplay += '<div class="task-con-2">'
   taskDisplay+= `<div class="description">${tas.description}</div>`
   taskDisplay += '</div>'

   taskDisplay += '<div class="task-con-3">'
   taskDisplay+= `<div class="date">${tas.dueDate}</div>`
   taskDisplay+= `<div class="priority">${tas.priority}</div>`
   taskDisplay+= `<div class="icon-btn delBtn" data-index=${task.indexOf(i)}></div>`
   taskDisplay += '</div>'

   taskDisplay += '</div>'


    });
    taskDisplay+='</div>'

    document.querySelector('.task-display').innerHTML = taskDisplay;

    const delBtns = document.querySelectorAll('.delBtn');
    
    delBtns.forEach( btn => {
        btn.addEventListener('click', () => {
            const i = btn.dataset.index;
            task.splice(i, 1);
            btn.parentElement.parentElement.remove();
        })
    })
}



export { displayTask };