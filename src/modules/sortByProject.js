import {renderToDoItem, clearNodes} from './render'
import {toDoListArray} from './storage'

// checks project title against array and creates new array to be rendered
let sortByProject = (projectTitle) => {
    console.log(projectTitle);
    let sortedArr = [];
    for (let i = 0; i < toDoListArray.length; i++) {
        if (toDoListArray[i].project == projectTitle) {
            sortedArr.push(toDoListArray[i]) 
        }
    }
    console.log(sortedArr)
    clearNodes();
    renderToDoItem(sortedArr);
}

export {
    sortByProject
}