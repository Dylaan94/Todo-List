import { toDoListArray } from "./createTodo"
import { renderToDoItem } from "./render"

let toStorage = (toDoListArray) => {

    // uses JSON to store the array as a string
    let toDoArray_serialised = JSON.stringify(toDoListArray)
    window.localStorage.setItem('toDoItems', toDoArray_serialised)
    console.log(localStorage)

}

let fromStorage = () => {
    // uses JSON to bring array back to life (turn into objects)
    let toDoArray_deserialised = JSON.parse(window.localStorage.getItem('toDoItems'))

    console.log(localStorage)
    console.log(toDoArray_deserialised);
    
    
    let toDoListArray = toDoArray_deserialised
    renderToDoItem(toDoListArray)
}

export {
    toStorage,
    fromStorage,
}

// window.localStorage.removeItem('toDoItems');