let checkFormValidity = () => {
    if (
        document.getElementById('task').checkValidity() &&
        document.getElementById('datepicker').checkValidity() &&
        document.getElementById('description').checkValidity() &&
        document.getElementById('notes').checkValidity()
    ) {
        return true
    } else {
        return false
    }
}

export { checkFormValidity }
