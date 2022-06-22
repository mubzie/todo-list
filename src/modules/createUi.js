import '../styles/createUi.css'
import todoIcon from '../svg/todo-fill.svg';
import projectIcon from '../svg/add-fill.svg';
import inboxIcon from '../svg/inbox-fill.svg';
import todayIcon from '../svg/calendar-event-fill.svg';
import thisWeekIcon from '../svg/calendar-todo-fill.svg';

const createUi = () => {
    const wrapperContainer = document.getElementById('content');

    //main container
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    //header
    const header = document.createElement('header');
    header.classList.add('header');

    const todoSvg = new Image();
    todoSvg.src = todoIcon;

    const headerText = document.createElement('div');
    headerText.classList.add('header-text');
    headerText.textContent = "Todo list";

    header.append(todoSvg, headerText);

    //content container
    const contentContainer = document.createElement('div')
    contentContainer.classList.add('content-container');

    //side bar navigation div
    const sideBar = document.createElement('div')
    sideBar.classList.add('side-bar');
    
    //nav list
    const navList = document.createElement('ul');
    navList.classList.add('nav');

    const inboxDiv = document.createElement('div');
    inboxDiv.classList.add('li-style');

    const inbox = document.createElement('li');
    inbox.textContent = "Inbox";

    const inboxSvg = new Image();
    inboxSvg.src = inboxIcon;
    inboxSvg.classList.add('add-btn')

    inboxDiv.append(inboxSvg, inbox);

    const todayDiv = document.createElement('div');
    todayDiv.classList.add('li-style');

    const today = document.createElement('li');
    today.textContent = "Today";

    const todaySvg = new Image()
    todaySvg.src = todayIcon;
    todaySvg.classList.add('add-btn')

    todayDiv.append(todaySvg, today);

    const thisWeekDiv = document.createElement('div');
    thisWeekDiv.classList.add('li-style');

    const thisWeek = document.createElement('li');
    thisWeek.textContent = "This Week"

    const thisWeekSvg = new Image();
    thisWeekSvg.src = thisWeekIcon;
    thisWeekSvg.classList.add('add-btn')

    thisWeekDiv.append(thisWeekSvg, thisWeek);

    navList.append(inboxDiv, todayDiv, thisWeekDiv);

    //divider
    const divider = document.createElement('hr');
    divider.classList.add('solid');

    //add project
    const projectTab = document.createElement('div');
    projectTab.classList.add('project-tab');

    const projectText = document.createElement('div');
    projectText.classList.add('project-text');
    projectText.textContent = "Project";

    const projectBtn = new Image();
    projectBtn.classList.add('add-btn');
    projectBtn.src = projectIcon;

    projectTab.append(projectText, projectBtn);

    //append child element to side bar nav
    sideBar.append(navList, divider, projectTab);

    //main content div
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    //append child element to content container
    contentContainer.append(sideBar, mainContent);

    //append child element to main container
    mainContainer.append(header, contentContainer);

    //append child element to wrapper container
    wrapperContainer.append(mainContainer);

    return wrapperContainer;
}

export { createUi };