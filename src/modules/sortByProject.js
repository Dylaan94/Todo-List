import { renderToDoItem, clearNodes } from './render'
import { toDoListArray } from './storage'

let containerTitle = document.getElementById('containerTitle')

// checks project title against array and creates new array to be rendered
let sortByProject = (projectTitle) => {
    console.log(projectTitle)
    let sortedArr = []
    for (let i = 0; i < toDoListArray.length; i++) {
        if (toDoListArray[i].project == projectTitle) {
            sortedArr.push(toDoListArray[i])
        }
        containerTitle.innerHTML = projectTitle
    }
    console.log(sortedArr)
    clearNodes()
    renderToDoItem(sortedArr)
}

export { sortByProject }
