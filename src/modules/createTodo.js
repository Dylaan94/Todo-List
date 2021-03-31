import {renderToDoItem} from './render'
import {toStorage_todo, toDoListArray} from './storage'

// factory function
let toDoitem = (task, dueDate, description, notes, priority) => {
    // push new todo item to array
    toDoListArray.push({task, dueDate, description, notes, priority}) 
    console.log(toDoListArray)
    toStorage_todo(toDoListArray);
    renderToDoItem(toDoListArray);
};

// call factory function
let newTodoItem = () => {
    let task = document.getElementById('task').value;
    let dueDate = document.getElementById('datepicker').value.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2") // reformats date to be parsed
    let description = document.getElementById('description').value;
    let notes = document.getElementById('notes').value;
    // let project = document.getElementById('project').value
    let priority = document.getElementById('priority').value;
    toDoitem(task, dueDate, description, notes, priority)
}

export {
    newTodoItem,
    toDoitem,
}

