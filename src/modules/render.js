import { toDoitem } from "./createTodo";
import { projectArray, toDoListArray } from "./storage";

let toDoListContainer = document.getElementById('toDoListContainer')
let projectDivContainer = document.getElementById('projectDivContainer')
let collapsableDivArr = []
let contentDivArr = []

// toggles form on and off
let toggleToDoForm = () => {
    document.getElementById("popupForm").classList.toggle("active");
}

let toggleProjectForm = () => {
    document.getElementById('projectPopupForm').classList.toggle("active")
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

            // separate collapsableDiv and contentDiv
            let collapsableDiv = document.createElement('div');
            collapsableDiv.id = 'collapsableDiv'
            collapsableDiv.className = 'collapsableDiv';
            collapsableDivArr.push(collapsableDiv)
            div.appendChild(collapsableDiv)

            let contentDiv = document.createElement('div')
            contentDiv.id = 'contentDiv' + i;
            contentDiv.className = 'contentDiv';
            contentDivArr.push(contentDiv) 
            div.appendChild(contentDiv)

            // dynamically create new divs for styling
            let dueDateDiv = document.createElement('div');
            dueDateDiv.id = 'dueDateDiv' + i;
            dueDateDiv.className = 'dueDateDiv';
            dueDateDiv.innerHTML = toDoListArray[i].dueDate;
            collapsableDiv.appendChild(dueDateDiv)

            let taskDiv = document.createElement('div');
            taskDiv.id = 'taskDiv' + i;
            taskDiv.className = 'taskDiv'
            taskDiv.innerHTML = toDoListArray[i].task
            collapsableDiv.appendChild(taskDiv)

            // divs for collapsed content
            let descriptionDiv = document.createElement('div');
            descriptionDiv.id = 'descriptionDiv' + i;
            descriptionDiv.className = 'descriptionDiv';
            descriptionDiv.innerHTML = toDoListArray[i].description;
            contentDiv.appendChild(descriptionDiv)
        
            let notesDiv = document.createElement('div');
            notesDiv.id = 'notesDiv' + i;
            notesDiv.className = 'notesDiv';
            notesDiv.innerHTML = toDoListArray[i].notes;
            contentDiv.appendChild(notesDiv)
        
            let priorityDiv = document.createElement('div');
            priorityDiv.id = 'priorityDiv' + i;
            priorityDiv.className = 'priorityDiv'
            priorityDiv.innerHTML = toDoListArray[i].priority;
            contentDiv.appendChild(priorityDiv) 
        }
    }

    // add ability to expand each item
    collapsableDivArr.forEach(item => {
        item.addEventListener('click', () => {
            console.log(item.nextElementSibling)
            let expandableContent = item.nextElementSibling
            collapseRender(expandableContent);
        })
    })

    console.log(toDoListContainer)
    console.log(toDoListArray)
    console.log(collapsableDivArr)
}

// remove currents divs to be reset depending on tab
// removes from last to first for performance
let clearNodes = () => {
    while(toDoListContainer.lastElementChild) {
        toDoListContainer.removeChild(toDoListContainer.lastElementChild)
    }
}


// checks against CSS and opens and closes
// something is kinda broken here, if the page doesnt reload some of the values
// get stuck: 'fixed' with location.reload();
let collapseRender = (expandableContent) => {
    console.log('collapse render called')
    console.log(expandableContent)

    console.log(expandableContent.style.display)
    if (expandableContent.style.display == 'block') {
        expandableContent.style.display = 'none'
    } else {
        expandableContent.style.display = 'block'
    }
    console.log(expandableContent.style.display)
    // add transition
    if (expandableContent.style.maxHeight) {
        expandableContent.style.maxHeight = null;
    } else {
        expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
    }
}

let renderProject = (projectArray) => {
    for (let i = 0; i < projectArray.length; i++) {
        if (!document.getElementById('projectDiv' + i)){
            let div = document.createElement('div');
            div.id = 'projectDiv' + i;
            div.className = 'projectDiv'
            div.innerHTML = projectArray[i].projectTitle
            projectDivContainer.appendChild(div);
        }
    }
}

export {
    toggleToDoForm,
    toggleProjectForm,
    renderToDoItem,
    renderProject,
    clearNodes,
    collapseRender,
    collapsableDivArr,
    contentDivArr,
}