let toDoListArray = [
]

// create constructor to make todolist items

class toDoItem {
    constructor () {
        this.task;
        this.dueDate;
        this.description;
        this.notes;
        this.priority;

        // this.checklist; add in later version
    }
}

// toggles form on
let toggleForm = () => {
    document.getElementById("popupForm").classList.toggle("active");
}

export {
    toggleForm
}
