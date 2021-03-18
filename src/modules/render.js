// render todolist item

let toDoListContainer = document.getElementById('toDoListContainer')

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
            toDoListContainer.appendChild(div);
        }
    }
    console.log(toDoListContainer)
}

export {
    toggleForm,
    renderToDoItem,
}