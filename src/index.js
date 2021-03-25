// timespan 
import{loadTimespanTest, checkToday, checkWeek, checkMonth} from './modules/loadTimespan'

// render 
import {toggleForm, clearNodes} from './modules/render';

import {newTodoItem} from './modules/createTodo';

import {fromStorage,clearStorage} from './modules/storage'

// tabbing variables
let allItemsTab = document.getElementById('allItemsTab');
let todayTab = document.getElementById('todayTab')
let weekTab = document.getElementById('weekTab')
let monthTab = document.getElementById('monthTab')

// button variables
let addTodoBtn = document.getElementById('addTodoBtn');
let clearAllBtn = document.getElementById('clearAllBtn')
let submitBtn = document.getElementById('submit');
let closeBtn = document.getElementById('close-btn')

// event listeners

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
    toggleForm();
})

submitBtn.addEventListener('click', () => {
    newTodoItem();
   // toggleForm();
})

closeBtn.addEventListener('click', () => {
    toggleForm();
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

