import { formatDistance, getDay, subDays, toDate, isToday, parseISO } from 'date-fns'
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

}

let checkMonth = () => {

}





export {
    checkToday,
    checkWeek,
    checkMonth,
    loadTimespanTest,
}