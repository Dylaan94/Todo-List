import {projectArray,toStorage_project} from './storage'
import {renderProject} from './render'

// factory function
let project = (projectTitle) => {
    projectArray.push({projectTitle})
    console.log(projectArray)
    toStorage_project(projectArray)
}

// set project values based on form
let newProject = () => {
    let projectTitle = document.getElementById('projectTitleText').value;
    project(projectTitle)
}

export {
    newProject
}