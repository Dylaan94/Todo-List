let toDoListArray = []

let toDoitem = (task, dueDate, description, notes, priority) => {
    // push new todo item to array
    toDoListArray.push({task, dueDate, description, notes, priority}) 
    console.log(toDoListArray)
};

// call factory function
let newTodoItem = () => {
    let task = document.getElementById('task').value;
    let dueDate = document.getElementById('dueDate').value; 
    let description = document.getElementById('description').value;
    let notes = document.getElementById('notes').value;
    let priority = document.getElementById('priority').value;
    toDoitem(task, dueDate, description, notes, priority)
}

// render book in DOM (this should be in seperate modules maybe?)
let renderTodoItem = () => {

}

// toggles form on
let toggleForm = () => {
    document.getElementById("popupForm").classList.toggle("active");
}

export {
    toggleForm,
    newTodoItem,
    toDoitem,
}
