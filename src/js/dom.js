import { myProjects, Project } from "./classes";

function clearTasks() {
    document.querySelector(".tasksContainer")
            .innerHTML = "";
}

function clearProjects() {
    document.querySelector(".projectsContainer")
            .innerHTML = "";
}

function displayTasks(project) {
    clearTasks();
    const tasks = project.tasks;
    displayProjectName(project);
    tasks.forEach((task) => { addTasktoPage(task) });
}

function addProject(name) {
    const project = new Project(name);
    myProjects.push(project);
    addProjectToPage(project);
    return project;
}

function displayProjectName(project) {
    const tasksContainer = document.querySelector(".tasksContainer");
    const projectName = document.createElement("h1");
    projectName.textContent = project.name;
    tasksContainer.appendChild(projectName);
}
    
function addTasktoPage(task) {
    const tasksContainer = document.querySelector(".tasksContainer");
    const title = document.createElement("p");
    title.textContent = task.title;

    const description = document.createElement("p");
    description.textContent = task.description;

    const dueDate = document.createElement("p");
    dueDate.textContent = task.dueDate;

    const priority = document.createElement("p");
    priority.textContent = task.priority;

    tasksContainer.appendChild(title);
    tasksContainer.appendChild(description);
    tasksContainer.appendChild(dueDate);
    tasksContainer.appendChild(priority);
}

function addProjectToPage(project) {
    const projectsContainer = document.querySelector(".projectsContainer")
    const projectName = document.createElement("p");
    projectName.textContent = project.name;

    const projectSelector = document.querySelector("#projectSelector");
    const option = document.createElement("option");
    option.textContent = project.name;

    projectSelector.appendChild(option);
    projectsContainer.appendChild(projectName);
}

export { clearTasks, clearProjects, displayTasks, addProject, displayProjectName, addTasktoPage, addProjectToPage }