const myProjects = [];

class Task {
    constructor (title, description, dueDate, priority) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.isCompleted = false
    }

    edit (title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        if (this.project !== project) {
            this.project.removeTask(this);
            this.project = project;
            project.tasks.push(this);
        }
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

    removeTask(task) {
        const index = tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }
}

export { Task, Project, myProjects }