import {renderToDoItem} from './render'
import {toStorage_todo, toDoListArray} from './storage'

// factory function
let toDoitem = (task, dueDate, description, notes, project, priority) => {
    // push new todo item to array
    toDoListArray.push({task, dueDate, description, notes, project, priority}) 
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
    let project = document.getElementById('projectDropBtn').innerHTML;
    let priority = document.getElementById('priority').value;
    toDoitem(task, dueDate, description, notes, project, priority)
}

let editTodoItem = (index) => {
    let task = document.getElementById('task').value;
    let dueDate = document.getElementById('datepicker').value.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2") // reformats date to be parsed
    let description = document.getElementById('description').value;
    let notes = document.getElementById('notes').value;
    let project = document.getElementById('projectDropBtn').innerHTML;
    let priority = document.getElementById('priority').value;
    // toDoitem(task, dueDate, description, notes, project, priority)
    // toDoListArray.push({task,dueDate,description,notes,project,priority})
    toDoListArray.splice(index, 1, {task,dueDate,description,notes,project,priority}) // replaces object at index
    toStorage_todo(toDoListArray)
    renderToDoItem(toDoListArray)
}

let rePopulateForm = (index) => {
    document.getElementById('task').value = toDoListArray[index].task
    document.getElementById('datepicker').value = toDoListArray[index].dueDate
    document.getElementById('description').value = toDoListArray[index].description
    document.getElementById('notes').value = toDoListArray[index].notes
    document.getElementById('projectDropBtn').innerHTML = toDoListArray[index].project
    document.getElementById('priority').value = toDoListArray[index].priority
    
}

let replaceTodoItem = () => {
    toDoListArray[index].push(task,dueDate,description,notes,project,priority)

}

export {
    newTodoItem,
    toDoitem,
    editTodoItem,
    rePopulateForm
}

