import { newTodoItem, toDoitem, } from "./createTodo"
import { renderToDoItem, renderProject } from "./render"

let toDoListArray = [];
let projectArray = [{
    projectTitle: 'Default'
}];

// stores the array as a string, updated each time toDoItem is called
let toStorage_todo = (toDoListArray) => {
    // uses JSON to store the array as a string
    let toDoArray_serialised = JSON.stringify(toDoListArray)
    window.localStorage.setItem('toDoItems', toDoArray_serialised)
    console.log(localStorage)
}

let toStorage_project = (projectArray) => {
    let projectArray_serialised = JSON.stringify(projectArray)
    window.localStorage.setItem('projectItems', projectArray_serialised)
}

// render the array that has been stored on refresh
let fromStorage_todo = () => {
    // uses JSON to bring array back to life (turn into objects)
    let toDoArray_deserialised = JSON.parse(window.localStorage.getItem('toDoItems'))
    
    toDoListArray = toDoArray_deserialised
    console.log(toDoListArray)
    renderToDoItem(toDoListArray)
}

let fromStorage_project = () => {
    let projectArray_serialised = JSON.parse(window.localStorage.getItem('projectItems'))
    projectArray = projectArray_serialised
    renderProject(projectArray)
}

let clearStorage = () => {
    window.localStorage.removeItem('toDoItems')
    window.localStorage.removeItem('projectItems')
}

export {
    toStorage_todo,
    toStorage_project,
    fromStorage_todo,
    fromStorage_project,
    toDoListArray,
    projectArray,
    clearStorage
}

// window.localStorage.removeItem('toDoItems');