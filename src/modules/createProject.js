import {projectArray} from './storage'

let createProjectTest = () => {
    console.log("createProjectRunning")
}

// factory function
let project = (projectTitle) => {
    projectArray.push({projectTitle})
    console.log(projectArray)
}

let newProject = () => {
    let projectTitle = document.getElementById('projectTitleText').value;
    project(projectTitle)
}

export {
    createProjectTest,
    newProject
}