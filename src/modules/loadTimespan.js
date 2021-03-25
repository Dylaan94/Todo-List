import { toDate, isToday, isThisWeek, isThisMonth, parseISO } from 'date-fns'
import {renderToDoItem, clearNodes} from './render'
import {toDoListArray} from './storage'


let loadTimespanTest = () => {
    let dueDateDivTest = document.getElementById('dueDateDiv0').innerHTML

    
    console.log("test")
    console.log(dueDateDivTest)

    let testDate = new Date (dueDateDivTest);
    
    console.log(testDate.toDateString()+ "thisdate") 

    let result = toDate(testDate)
    

    // creates current date
    // const date = new Date();
    // console.log(date)
}

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
    }
    clearNodes();
    renderToDoItem(toDoListMonth);
}





export {
    checkToday,
    checkWeek,
    checkMonth,
    loadTimespanTest,
}