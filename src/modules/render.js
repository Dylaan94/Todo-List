// render todolist item

let toDoListContainer = document.getElementById('toDoListContainer')

// toggles form on and off
let toggleForm = () => {
    document.getElementById("popupForm").classList.toggle("active");
}

let renderToDoItem = (toDoListArray) => {
    // for loop to render each object and create div
    for (let i = 0; i < toDoListArray.length; i ++) {
        // check if the div has already been generated
        if (!document.getElementById('toDoItem'+i)){
            let div = document.createElement('div')
            div.id = 'toDoItem' + i;
            div.className = 'toDoItem';
            div.innerHTML = '<h2>' + toDoListArray[i].task + '</h2>' + 
                            '<p>' + toDoListArray[i].description + '</p>' + 
                            toDoListArray[i].notes + toDoListArray[i].dueDate + toDoListArray[i].priority;
            toDoListContainer.appendChild(div);
        }
    }
    console.log(toDoListContainer)
}

export {
    toggleForm,
    renderToDoItem,
}