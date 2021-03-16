console.log("test")


import {loadTodayTest} from './modules/loadToday';
import {loadWeekTest} from './modules/loadWeek';
import {loadMonthTest} from './modules/loadMonth';

let todayTab = document.getElementById('todayTab')
let weekTab = document.getElementById('weekTab')
let monthTab = document.getElementById('monthTab')

todayTab.addEventListener('click', () => {
    loadTodayTest();
})

weekTab.addEventListener('click', () => {
    loadWeekTest();
})

monthTab.addEventListener('click', () => {
    loadMonthTest();
})