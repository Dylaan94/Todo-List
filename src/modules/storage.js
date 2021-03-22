let toStorage = (toDoListArray) => {

    // uses JSON to store the array as a string
    let toDoArray_serialised = JSON.stringify(toDoListArray)
    window.localStorage.setItem('toDoItems', toDoArray_serialised)

    // uses JSON to bring back to life (turn into objects)
    let toDoArray_deserialised = JSON.parse(window.localStorage.getItem('toDoItems'))

    console.log(localStorage)
    console.log(toDoArray_deserialised);
}

export {
    toStorage,
}

// window.localStorage.removeItem('toDoItems');