import {renderToDoItem, clearNodes} from './render'
import {toDoListArray} from './storage'

let sortByProjectTest = () => {
    console.log('project clicked')
}

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

    // sorts based on project property
    
}

export {
    sortByProjectTest,
    sortByProject
}