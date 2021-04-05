import {isToday, isThisWeek, isThisMonth, parseISO } from 'date-fns'
import {renderToDoItem, clearNodes} from './render'
import {toDoListArray} from './storage'

// variables 

let containerTitle = document.getElementById('containerTitle')

// probably a way to remove duplicate code here
let checkToday = () => {
    let toDoListToday = [];
    console.log('checkTodayRunning')
    for (let i = 0; i < toDoListArray.length; i++) {
        // uses parseISO so that isToday can be run
        if (isToday(parseISO(toDoListArray[i].dueDate)) == true){
            toDoListToday.push(toDoListArray[i])
            console.log(toDoListToday);
        }
        containerTitle.innerHTML = 'Today'
    }
        // need to remove existing divs
        clearNodes();
        renderToDoItem(toDoListToday)
}

let checkWeek = () => {
    let toDoListWeek = [];
    console.log('checkWeekRunning')
    for (let i = 0; i < toDoListArray.length; i++) {
        if (isThisWeek(parseISO(toDoListArray[i].dueDate)) == true) {
            toDoListWeek.push(toDoListArray[i])
            console.log(toDoListWeek)
        }
        containerTitle.innerHTML = 'This week'
    }
        clearNodes();
        renderToDoItem(toDoListWeek)
}

let checkMonth = () => {
    let toDoListMonth = [];
    console.log('checkMonthRunning')
    for (let i = 0; i < toDoListArray.length; i++){
        if(isThisMonth(parseISO(toDoListArray[i].dueDate)) == true) {
            toDoListMonth.push(toDoListArray[i])
            console.log(toDoListMonth)
        }
        containerTitle.innerHTML = 'This month'
    }
    clearNodes();
    renderToDoItem(toDoListMonth);
}

let resetContainerTitle = () => {
    containerTitle.innerHTML = 'To Do List'
}

export {
    checkToday,
    checkWeek,
    checkMonth,
    resetContainerTitle
}