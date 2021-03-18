console.log("test")


import {loadTodayTest} from './modules/loadToday';
import {loadWeekTest} from './modules/loadWeek';
import {loadMonthTest} from './modules/loadMonth';
import {renderToDoItem, toggleForm} from './modules/render';

import {todoItem, newTodoItem} from './modules/createTodo';


let todayTab = document.getElementById('todayTab')
let weekTab = document.getElementById('weekTab')
let monthTab = document.getElementById('monthTab')

let addTodoBtn = document.getElementById('addTodoBtn');
let submitBtn = document.getElementById('submit');
let closeBtn = document.getElementById('close-btn')

todayTab.addEventListener('click', () => {
    loadTodayTest();
})

weekTab.addEventListener('click', () => {
    loadWeekTest();
})

monthTab.addEventListener('click', () => {
    loadMonthTest();
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