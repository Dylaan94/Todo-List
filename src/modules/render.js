// render todolist item

let toDoListContainer = document.getElementById('toDoListContainer')

let test = () => {
    console.log('renderTest')
}

let renderToDoItem = (toDoListArray) => {
    console.log(toDoListContainer)
    // for loop to render each object in the array
    // create a div for the data from the object to be stored
    for (let i = 0; i < toDoListArray.length; i ++) {
        let div = document.createElement('div')
        div.id = 'toDoItem' + i;
        div.className = 'toDoItem' + i;
        toDoListContainer.appendChild(div);
    }
    
    console.log(toDoListContainer)
}

export {
    test,
    renderToDoItem,
}