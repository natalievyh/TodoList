const myProjects = [];

class Task {
    constructor (title, description, dueDate, priority, isCompleted=false) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.isCompleted = isCompleted
    }

    edit (title, description, dueDate, priority, project, newProject) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        if (project !== newProject) {
            project.removeTask(this);
            newProject.tasks.push(this);
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

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }
}

export { Task, Project, myProjects }