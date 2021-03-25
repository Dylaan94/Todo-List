import { formatDistance, getDay, subDays, toDate, isToday, parseISO } from 'date-fns'

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

let checkToday = () => {
    console.log('checkTodayRunning')
    console.log(parseISO('2021-03-25')) // need to change order of date.
    console.log(toDoListArray[0].dueDate) // replaces slashes with dashes
    console.log(parseISO(toDoListArray[0].dueDate))
    // returning invalid
    for (let i = 0; i < toDoListArray.length; i++) {
        if (isToday(parseISO(toDoListArray[i].dueDate)) == true){
            return console.log("is today");
        }
    }
}

let checkWeek = () => {

}

let checkMonth = () => {

}



export {
    checkToday,
    checkWeek,
    checkMonth,
    loadTimespanTest,
}