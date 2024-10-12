import { myProjects, Project } from "./classes"
import editButton from "../icons/edit.png"
import deleteButton from "../icons/delete.png"

function clearTasks(project) {
    document.querySelector(".tasksContainer")
            .innerHTML = "";
}

function displayTasks(project) {
    clearTasks(project);
    const tasks = project.tasks;
    displayProjectName(project.name);
    tasks.forEach((task) => { addTasktoPage(task) });
}

function addProject(name) {
    const project = new Project(name);
    myProjects.push(project);
    addProjectToPage(project);
    return project;
}

function displayProjectName(name) {
    const projectName = document.querySelector("#projectTitle");
    projectName.textContent = name;
}
    
function addTasktoPage(task) {
    const tasksContainer = document.querySelector(".tasksContainer");
    const taskDiv = document.createElement("div");
    taskDiv.className = "taskDiv";
    const headerDiv = document.createElement("div");
    headerDiv.className = "headerDiv";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'taskCheckbox';

    const label = document.createElement('label');
    label.htmlFor = 'taskCheckbox';
    label.textContent = task.title;
    label.className = "taskTitle";

    const titleDiv = document.createElement("div");
    titleDiv.appendChild(checkbox);
    titleDiv.appendChild(label);

    const editBtn = document.createElement("img");
    editBtn.src = editButton;

    const deleteBtn = document.createElement("img");
    deleteBtn.src = deleteButton;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "buttonDiv";
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    taskDiv.appendChild(headerDiv);
    headerDiv.appendChild(titleDiv);
    headerDiv.appendChild(buttonDiv);

    checkbox.addEventListener("click", () => { task.toggleCompletionStatus() });
    editBtn.addEventListener("click", () => { editTask(task) });
    deleteBtn.addEventListener("click", () => { deleteTask(task) });

    const description = document.createElement("p");
    description.className = "taskDescription";
    description.textContent = task.description;

    const info = document.createElement("div");
    info.className = "taskInfo";

    const dueDate = document.createElement("p");
    dueDate.className = "taskDueDate";
    dueDate.textContent = `Due Date: ${task.dueDate}`;

    const priority = document.createElement("p");
    priority.className = "taskPriority";
    priority.textContent = `Priority: ${task.priority}`;

    info.appendChild(dueDate);
    info.appendChild(priority);

    taskDiv.appendChild(description);
    taskDiv.appendChild(info);

    tasksContainer.appendChild(taskDiv);

}

function addProjectToPage(project) {
    const projectsContainer = document.querySelector("#projectsContainer")
    const projectName = document.createElement("p");
    projectName.textContent = project.name;

    const projectSelector = document.querySelector("#projectSelector");
    const option = document.createElement("option");
    option.textContent = project.name;

    projectSelector.appendChild(option);
    projectsContainer.appendChild(projectName);
}

export { displayTasks, addProject, addTasktoPage, addProjectToPage }