// import svg from '../svg/delete-bin-fill.svg'
import { task } from "./task";

function displayTask(task, i) {

    // let i;

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