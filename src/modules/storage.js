import { newTodoItem, toDoitem, } from "./createTodo"
import { renderToDoItem } from "./render"

let toDoListArray = [];

// stores the array as a string, updated each time toDoItem is called
let toStorage = (toDoListArray) => {
    // uses JSON to store the array as a string
    let toDoArray_serialised = JSON.stringify(toDoListArray)
    window.localStorage.setItem('toDoItems', toDoArray_serialised)
    console.log(localStorage)
}

// render the array that has been stored on refresh
let fromStorage = () => {
    // uses JSON to bring array back to life (turn into objects)
    let toDoArray_deserialised = JSON.parse(window.localStorage.getItem('toDoItems'))

    console.log(localStorage)
    console.log(toDoArray_deserialised);
    
    toDoListArray = toDoArray_deserialised
    console.log(toDoListArray)
    renderToDoItem(toDoListArray)
}

export {
    toStorage,
    fromStorage,
    toDoListArray
}

// window.localStorage.removeItem('toDoItems');