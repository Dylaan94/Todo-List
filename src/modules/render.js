let toDoListContainer = document.getElementById('toDoListContainer')

// toggles form on and off
let toggleForm = () => {
    document.getElementById("popupForm").classList.toggle("active");
}

// render ToDo list items

let renderToDoItem = (toDoListArray) => {
    console.log(toDoListArray)
    // for loop to render each object and create div
    for (let i = 0; i < toDoListArray.length; i ++) {
        // check if the div has already been generated
        if (!document.getElementById('toDoItem' + i)){
            let div = document.createElement('div')
            div.id = 'toDoItem' + i;
            div.className = 'toDoItem';
            toDoListContainer.appendChild(div);

            // add variable to new div
            let toDoItem = document.getElementById('toDoItem' + i)

            // dynamically create new divs for styling
            let taskDiv = document.createElement('div');
            taskDiv.id = 'taskDiv' + i;
            taskDiv.className = 'taskDiv'
            taskDiv.innerHTML = toDoListArray[i].task
            toDoItem.appendChild(taskDiv)
        
            let descriptionDiv = document.createElement('div');
            descriptionDiv.id = 'descriptionDiv' + i;
            descriptionDiv.className = 'descriptionDiv';
            descriptionDiv.innerHTML = toDoListArray[i].description;
            toDoItem.appendChild(descriptionDiv)
        
            let dueDateDiv = document.createElement('div');
            dueDateDiv.id = 'dueDateDiv' + i;
            dueDateDiv.className = 'dueDateDiv';
            dueDateDiv.innerHTML = toDoListArray[i].dueDate;
            toDoItem.appendChild(dueDateDiv)
        
            let notesDiv = document.createElement('div');
            notesDiv.id = 'notesDiv' + i;
            notesDiv.className = 'notesDiv';
            notesDiv.innerHTML = toDoListArray[i].notes;
            toDoItem.appendChild(notesDiv)
        
            let priorityDiv = document.createElement('div');
            priorityDiv.id = 'priorityDiv' + i;
            priorityDiv.className = 'priorityDiv'
            priorityDiv.innerHTML = toDoListArray[i].priority;
            toDoItem.appendChild(priorityDiv) 
        }
    }
    console.log(toDoListContainer)
    console.log(toDoListArray)
}


// remove currents divs to be reset depending on tab
// removes from last to first for performance
let clearNodes = () => {
    console.log(toDoListContainer.lastElementChild)
    while(toDoListContainer.lastElementChild) {
        toDoListContainer.removeChild(toDoListContainer.lastElementChild)
    }
}

export {
    toggleForm,
    renderToDoItem,
    clearNodes,
}