import { myProjects, Project } from "./classes"
import editButton from "../icons/edit.png"
import deleteButton from "../icons/delete.png"
import darkMoon from "../images/darkMoon.png"
import { saveProjectsLocally } from "./storage";
import { removeTaskFromCategories, removeTaskFromProjects, myCategories, allTasks } from "./taskCategories";
import { editProject, editTask } from "./forms";
import { format } from "date-fns";
import { sortFunctionality } from "./sort";

function clearTasks() {
    document.querySelector(".tasksContainer")
            .innerHTML = "";
}

function clearProjects() {
    document.querySelector("#projectsContainer")
            .innerHTML = "";
}

function loadProject(tasks, project) {
    displayTasks(tasks, project); 
    sortFunctionality(project);
}

function displayTasks(tasks, project) {
    clearTasks();
    displayProjectName(project.name);
    tasks.forEach((task) => { 
        addTasktoPage(task, project) 
    });
    sortFunctionality(project);
}

function redisplayTasks(tasks, project) {
    clearTasks();
    displayProjectName(project.name);
    tasks.forEach((task) => { 
        addTasktoPage(task, project) 
    });
}

function displayProjects(projects) {
    clearProjects();
    projects.forEach((project) => { 
        addProjectToPage(project);
    });
}

function addProject(name) {
    const project = new Project(name);
    myProjects.push(project);
    addProjectToPage(project);
    addProjectToSelector(project);
    return project;
}

function displayProjectName(name) {
    const projectName = document.querySelector("#projectTitle");
    projectName.textContent = name;
}
    
function addTasktoPage(task, project) {
    const tasksContainer = document.querySelector(".tasksContainer");
    const taskDiv = document.createElement("div");
    taskDiv.className = "taskDiv";
    const headerDiv = document.createElement("div");
    headerDiv.className = "headerDiv";

    const checkbox = document.createElement('img');
    checkbox.src = darkMoon;
    checkbox.className = "taskCheckbox"

    const label = document.createElement('p');
    label.textContent = task.title;
    label.className = "taskTitle";

    if (task.isCompleted) { 
        label.classList.toggle("titleStrikethrough");
        checkbox.classList.toggle("taskCompleted"); 
    }

    const titleDiv = document.createElement("div");
    titleDiv.className = "titleDiv";
    titleDiv.appendChild(checkbox);
    titleDiv.appendChild(label);

    const editBtn = document.createElement("img");
    editBtn.className = "icon";
    editBtn.src = editButton;
    editBtn.style.display = "none";

    const deleteBtn = document.createElement("img");
    deleteBtn.className = "icon";
    deleteBtn.src = deleteButton;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "buttonDiv";
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    taskDiv.appendChild(headerDiv);
    headerDiv.appendChild(titleDiv);
    headerDiv.appendChild(buttonDiv);

    checkbox.addEventListener("click", () => { 
        task.toggleCompletionStatus(); 
        label.classList.toggle("titleStrikethrough");
        checkbox.classList.toggle("taskCompleted");
    });
    editBtn.addEventListener("click", () => { editTask(task, project) });
    deleteBtn.addEventListener("click", () => { deleteTask(task, project) });

    const description = document.createElement("p");
    description.className = "taskDescription";
    description.textContent = task.description;

    const info = document.createElement("div");
    info.className = "taskInfo";

    const dueDate = document.createElement("p");
    dueDate.className = "taskDueDate";
    const date = new Date(task.dueDate.replace(/-/g, '/'));
    const formattedDate = format(date, 'MM/dd/yyyy');
    dueDate.textContent = `Due: ${formattedDate}`;

    const priority = document.createElement("p");
    priority.className = "taskPriority";
    priority.textContent = `Priority: ${task.priority}`;

    info.appendChild(dueDate);
    info.appendChild(priority);

    taskDiv.appendChild(description);
    taskDiv.appendChild(info);

    tasksContainer.appendChild(taskDiv);

}

function addProjectToSelector(project) {
    const projectSelector = document.querySelector("#projectSelector");
    const option = document.createElement("option");
    option.textContent = project.name;
    projectSelector.appendChild(option);
}

function removeProjectFromSelector(project) {
    const projectSelector = document.querySelector("#projectSelector");
    const optionToRemove = Array.from(projectSelector.options)
                                .find((option) => option.textContent === project.name);
    if (optionToRemove) {
        projectSelector.removeChild(optionToRemove);
    } else {
        console.error(`Option not found for project: ${project.name}`);
    }
}

function addProjectToPage(project) {
    const projectsContainer = document.querySelector("#projectsContainer")
    const projectDiv = document.createElement("div");
    projectDiv.className = "headerDiv";
    projectDiv.id = `projectName-${project.name}`;
    
    const projectName = document.createElement("p");
    projectName.textContent = project.name;

    const editBtn = document.createElement("img");
    editBtn.className = "icon";
    editBtn.src = editButton;
    editBtn.style.display = "none";

    const deleteBtn = document.createElement("img");
    deleteBtn.className = "icon";
    deleteBtn.src = deleteButton;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "buttonDiv";
    
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(buttonDiv);
    projectsContainer.appendChild(projectDiv);

    projectDiv.addEventListener("click", () => { loadProject(project.tasks, project) });
    editBtn.addEventListener("click", () => { editProject(project) });
    deleteBtn.addEventListener("click", () => { deleteProject(project) });
}

function deleteTask(task, project) {
    project.removeTask(task);
    removeTaskFromCategories(task);
    removeTaskFromProjects(task); 
    saveProjectsLocally(myProjects);
    displayTasks(project.tasks, project);
}

function deleteProject(project) {
    project.tasks.forEach((task) => { allTasks.removeTask(task); });
    removeProjectFromSelector(project);
    const index = myProjects.indexOf(project);
    myProjects.splice(index, 1);
    saveProjectsLocally(myProjects);
    displayProjects(myProjects);
}

export { redisplayTasks, displayTasks, displayProjects, addProject, addTasktoPage, deleteTask, clearTasks, loadProject }