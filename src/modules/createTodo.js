import {renderToDoItem} from './render'
import {toStorage} from './storage'

let toDoListArray = []

// factory function
let toDoitem = (task, dueDate, description, notes, priority) => {
    // push new todo item to array
    toDoListArray.push({task, dueDate, description, notes, priority}) 
    console.log(toDoListArray)
    toStorage(toDoListArray);
    renderToDoItem(toDoListArray);
};

// call factory function
let newTodoItem = () => {
    let task = document.getElementById('task').value;
    let dueDate = document.getElementById('datepicker').value; 
    let description = document.getElementById('description').value;
    let notes = document.getElementById('notes').value;
    let priority = document.getElementById('priority').value;
    toDoitem(task, dueDate, description, notes, priority)
}

export {
    toDoListArray,
    newTodoItem,
    toDoitem,
}
