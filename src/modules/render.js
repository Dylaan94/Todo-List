import {sortByProject} from './sortByProject'
import {editTodoItem, rePopulateForm, deleteTodoItem} from './createTodo'
import Swal from 'sweetalert2'

let toDoListContainer = document.getElementById('toDoListContainer')
let projectDivContainer = document.getElementById('projectDivContainer')
let projectDropDivs = document.getElementById('projectDropDivs')

let collapsableDivArr = []
let contentDivArr = []

// toggles form on and off
let toggleToDoForm = () => {
    document.getElementById("popupForm").classList.toggle("active");
}

let toggleToDoForm_edit = (index) => {
    let editBtn = document.getElementById('edit')
    let submitBtn = document.getElementById('submit')
    // set id to allow array to be edited
    editBtn.id = index;
    // show edit button and hide submit button
    editBtn.style.display = 'block'
    submitBtn.style.display = 'none'
    document.getElementById("popupForm").classList.toggle("active");
}

let toggleProjectForm = () => {
    document.getElementById('projectPopupForm').classList.toggle("active")
}

// render ToDo list items
let renderToDoItem = (toDoListArray) => {
    // reset arrays so they don't keep filling up
    collapsableDivArr = [];
    contentDivArr = [];

    // arrays for event listeners
    let editTodoBtnArr = [];
    let deleteTodoBtnArr = [];

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
            // add to title collapsable div
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
            descriptionDiv.innerHTML = '<b>Description: </b>' + toDoListArray[i].description;
            contentDiv.appendChild(descriptionDiv)
        
            let notesDiv = document.createElement('div');
            notesDiv.id = 'notesDiv' + i;
            notesDiv.className = 'notesDiv';
            notesDiv.innerHTML = '<b>Notes: </b>' + toDoListArray[i].notes;
            contentDiv.appendChild(notesDiv)

            let projectDivText = document.createElement('div');
            projectDivText.id = 'projectDivText' + i;
            projectDivText.className = 'projectDivText'
            projectDivText.innerHTML = '<b>Project: </b>' + toDoListArray[i].project
            contentDiv.appendChild(projectDivText)
        
            let priorityDiv = document.createElement('div');
            priorityDiv.id = 'priorityDiv' + i;
            priorityDiv.className = 'priorityDiv'
            priorityDiv.innerHTML = '<b>Priority: </b>'+ toDoListArray[i].priority;
            contentDiv.appendChild(priorityDiv) 

            // add edit and delete buttons
            let editTodoBtn = document.createElement('div')
            editTodoBtn.id = 'editTodoBtn' + i;
            editTodoBtn.className = 'editTodoBtn';
            editTodoBtn.innerHTML = '<i class="fas fa-edit"></i>'
            editTodoBtnArr.push(editTodoBtn);
            collapsableDiv.appendChild(editTodoBtn);
            

            let deleteTodoBtn = document.createElement('div')
            deleteTodoBtn.id = 'deleteTodoBtn' + i;
            deleteTodoBtn.className = 'deleteTodoBtn';
            deleteTodoBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
            deleteTodoBtnArr.push(deleteTodoBtn)
            collapsableDiv.appendChild(deleteTodoBtn)
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

    // add event listeners to edit buttons
    editTodoBtnArr.forEach(item => {
        item.addEventListener('click', () => {
            console.log(item.id)
            let index = item.id.slice(-1); // gets array index from id
            console.log(index)
            rePopulateForm(index);
            toggleToDoForm_edit(index);
        })
    })

    // add event listeners to delete buttons
    deleteTodoBtnArr.forEach(item => {
        item.addEventListener('click', () => {
            let index = item.id.slice(-1) // gets array index from end of id

            Swal.fire({
                title: 'Are you sure you want to delete this item?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Delete`,
                denyButtonText: `Keep`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Deleted!', '', 'success')
                  console.log('delete button pressed')
                  deleteTodoItem(index);
                } else if (result.isDenied) {
                  Swal.fire('Not deleted', '', 'info')
                  console.log('not delete button pressed')
                }
              })

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
    if (expandableContent.style.display == 'block') {
        expandableContent.style.display = 'none'
    } else {
        expandableContent.style.display = 'block'
    }
    // add transition
    if (expandableContent.style.maxHeight) {
        expandableContent.style.maxHeight = null;
    } else {
        expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
    }
}

let renderProject = (projectArray) => {
    let projectDivContArr = [];
    for (let i = 0; i < projectArray.length; i++) {
        if (!document.getElementById('projectDiv' + i)){
            let div = document.createElement('div');
            div.id = 'projectDiv' + i;
            div.className = 'projectDiv'
            div.innerHTML = projectArray[i].projectTitle
            projectDivContArr.push(div);
            projectDivContainer.appendChild(div);
        }
    }
    // add event listeners for sorting
    // sets projectTitle and runs sortByProject
    projectDivContArr.forEach(item => {
        item.addEventListener('click', () => {
            let projectTitle = item.innerHTML
            sortByProject(projectTitle)
        })
    })

}

let renderProjectDrop = (projectArray) => {
    let projectDropBtn = document.getElementById('projectDropBtn')
    let projectDropArr = []
    
    for (let i = 0; i < projectArray.length; i++) {
        let li = document.createElement('li');
        li.id = "projectDropItem" + i;
        li.class = "projectDropItem";
        li.innerHTML = projectArray[i].projectTitle;
        projectDropArr.push(li);
        projectDropDivs.appendChild(li);
    }

    // sets the buttons value based on click and closes dropdown
    projectDropArr.forEach(item => {
        item.addEventListener('click', () => {
            console.log('project clicked')
            projectDropBtn.innerHTML = item.innerHTML;
            toggleProjectDropdown();
        })
    })
}

let toggleProjectDropdown = () => {
    let projectDropDivs = document.getElementById('projectDropDivs')
    if (projectDropDivs.style.display == 'block') {
        projectDropDivs.style.display = 'none'
    } else {
        projectDropDivs.style.display = 'block'
    }
    // add transition
    if (projectDropDivs.style.maxHeight) {
        projectDropDivs.style.maxHeight = null;
    } else {
        projectDropDivs.style.maxHeight = projectDropDivs.scrollHeight + 'px';
    }
}

export {
    toggleToDoForm,
    toggleProjectForm,
    renderToDoItem,
    renderProject,
    renderProjectDrop,
    clearNodes,
    collapseRender,
    collapsableDivArr,
    contentDivArr,
    toggleProjectDropdown,
}