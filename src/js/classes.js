class Task {
    constructor (title, description, dueDate, priority) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.isCompleted = false
    }

    edit (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    toggleCompletionStatus () {
        if (this.isCompleted) {
            this.isCompleted = false;
        } else {
            this.isCompleted = true;
        }
    }
}

class Project {
    constructor (name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(title, description, dueDate, priority) {
        let task = new Task(title, description, dueDate, priority);
        this.tasks.push(task);
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }
}

export { Task, Project }