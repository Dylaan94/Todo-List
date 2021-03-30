// timespan 
import{loadTimespanTest, checkToday, checkWeek, checkMonth} from './modules/loadTimespan'

// render 
import {toggleToDoForm, toggleProjectForm, clearNodes, getDivArrays, collapsableDivArr} from './modules/render';

// create modules
import {newTodoItem} from './modules/createTodo';
import {createProjectTest, newProject} from './modules/createProject'

//storage
import {fromStorage,clearStorage} from './modules/storage'

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
let projectSubmitBtn = document.getElementById('projectSubmit')
let closeBtn = document.getElementById('close-btn')

// event listeners

console.log(collapsableDivArr)

allItemsTab.addEventListener('click', () => {
    clearNodes();
    fromStorage();
})

todayTab.addEventListener('click', () => {
    // loadTimespanTest();
    checkToday();
})

weekTab.addEventListener('click', () => {
    // loadTimespanTest();
    checkWeek();
})

monthTab.addEventListener('click', () => {
    //loadTimespanTest();
    checkMonth();
})


addTodoBtn.addEventListener('click', () => {
    toggleToDoForm();
})

addProjectBtn.addEventListener('click', () => {
    createProjectTest();
    toggleProjectForm();
})

submitBtn.addEventListener('click', () => {
    newTodoItem();
    location.reload(); 
   // toggleForm();
})

projectSubmitBtn.addEventListener('click', () => {
    newProject();
    toggleProjectForm();
})

closeBtn.addEventListener('click', () => {
    toggleToDoForm();
})

clearAllBtn.addEventListener('click', () => {
    clearNodes();
    clearStorage();
    location.reload();
})

// checks if there are todoitems already in storage, if so it will create divs
if (window.localStorage.getItem('toDoItems') !== null) {
    fromStorage();
}

