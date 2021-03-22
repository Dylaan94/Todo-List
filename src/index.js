import{loadTimespanTest} from './modules/loadTimespan'

import {toggleForm} from './modules/render';
import {newTodoItem} from './modules/createTodo';

// tabbing variables
let todayTab = document.getElementById('todayTab')
let weekTab = document.getElementById('weekTab')
let monthTab = document.getElementById('monthTab')

// button variables
let addTodoBtn = document.getElementById('addTodoBtn');
let submitBtn = document.getElementById('submit');
let closeBtn = document.getElementById('close-btn')

todayTab.addEventListener('click', () => {
    loadTimespanTest();
})

weekTab.addEventListener('click', () => {
    loadTimespanTest();
})

monthTab.addEventListener('click', () => {
    loadTimespanTest();
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