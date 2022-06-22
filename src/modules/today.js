import todayIcon from '../svg/add-fill.svg';

const todayTab = () => {
    const mainContainer = document.getElementsByClassName('main-content');

    const todayTaskHeader = document.createElement('div');
    todayTaskHeader.classList.add('today-task-header');

    const todayTaskText = document.createElement('div');
    todayTaskText.textContent = "Today";

    const todayTaskIcon = new Image();
    todayTaskIcon.src = todayIcon;

    todayTaskHeader.append(todayTaskText, todayTaskIcon);

    mainContainer.appendChild(todayTaskHeader);

}

export { todayTab };