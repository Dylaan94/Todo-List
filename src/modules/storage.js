import { renderToDoItem, renderProject, renderProjectDrop } from "./render"

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
    // store as string
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
    // parse from string
    let projectArray_serialised = JSON.parse(window.localStorage.getItem('projectItems'))
    projectArray = projectArray_serialised;
    renderProject(projectArray) // renders projects in the DOM
    renderProjectDrop(projectArray) // renders project dropdown on popup form

}

// loads default project even if nothing in storage
let loadDefaultProject = () => {
    toStorage_project(projectArray)
    fromStorage_project();
}

// clears all items
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
    clearStorage,
    loadDefaultProject
}