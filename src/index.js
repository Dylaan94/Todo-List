// sorting 
import{checkToday, checkWeek, checkMonth, resetContainerTitle} from './modules/sortByTime'

// render 
import {toggleToDoForm, toggleProjectForm, clearNodes, toggleProjectDropdown} from './modules/render';

// create modules
import {newTodoItem, editTodoItem} from './modules/createTodo';
import {newProject} from './modules/createProject'

// storage
import {fromStorage_todo, fromStorage_project, clearStorage, loadDefaultProject} from './modules/storage'

// tabbing variables
let allItemsTab = document.getElementById('allItemsTab');
let todayTab = document.getElementById('todayTab')
let weekTab = document.getElementById('weekTab')
let monthTab = document.getElementById('monthTab')

// button variables
let addTodoBtn = document.getElementById('addTodoBtn');
let addProjectBtn = document.getElementById('addProjectBtn')
let clearAllBtn = document.getElementById('clearAllBtn')
let submitBtn = document.getElementById('submit');
let editBtn = document.getElementById('edit');
let projectSubmitBtn = document.getElementById('projectSubmit')
let closeBtn = document.getElementById('close-btn')
let projectDropBtn = document.getElementById('projectDropBtn')
let projectCloseBtn = document.getElementById('projectClose-btn')

// event listeners
allItemsTab.addEventListener('click', () => {
    clearNodes();
    fromStorage_todo();
    resetContainerTitle();
})

todayTab.addEventListener('click', () => {
    checkToday();
})

weekTab.addEventListener('click', () => {
    checkWeek();
})

monthTab.addEventListener('click', () => {
    checkMonth();
})

addTodoBtn.addEventListener('click', () => {
    toggleToDoForm();
})

projectDropBtn.addEventListener('click', () => {
    toggleProjectDropdown();
})

addProjectBtn.addEventListener('click', () => {
    toggleProjectForm();
})

submitBtn.addEventListener('click', () => {
    newTodoItem();
    location.reload(); 
})

editBtn.addEventListener('click', () => {
    console.log(editBtn.id)
    let index = editBtn.id;
    editTodoItem(index);
    location.reload();
})

projectSubmitBtn.addEventListener('click', () => {
    newProject();
    location.reload();
})

closeBtn.addEventListener('click', () => {
    location.reload();
})

projectCloseBtn.addEventListener('click', () => {
    location.reload();
})

clearAllBtn.addEventListener('click', () => {
    clearNodes();
    clearStorage();
    location.reload();
})

// checks if there are todoitems already in storage, if so it will create divs
if (window.localStorage.getItem('toDoItems') !== null) {
    fromStorage_todo();
}

// checks project items status and loads based on local storage
if (window.localStorage.getItem('projectItems') == null) {
    loadDefaultProject();
} else {
    fromStorage_project();
}