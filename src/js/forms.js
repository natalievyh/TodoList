import { myProjects, Project } from "./classes"
import { displayTasks, addProject } from "./dom"
import { saveProjectsLocally } from "./storage";

function projectFormFunctionality() {
    const projectModal = document.querySelector('.projectModal');
    const newProject = document.querySelector('#newProjectButton');
    const close = document.querySelector('.formClose');
    const submit = document.querySelector('.formSubmit');

    newProject.addEventListener("click", () => {
        projectModal.showModal();
    })

    close.addEventListener('click', () => {
        projectModal.close();
    })

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        const projectName = document.querySelector('#name').value.trim();
        projectModal.close();
        const project = addProject(projectName);
        saveProjectsLocally(myProjects);
        document.querySelector('.projectForm').reset();
        displayTasks(project);
    })
}

function taskFormFunctionality() {
    const taskModal = document.querySelector('.taskModal');
    const newTask = document.querySelector('#newTaskButton');
    const close = document.querySelector('.taskClose');
    const submit = document.querySelector('.taskSubmit');

    newTask.addEventListener("click", () => {
        taskModal.showModal();
    })

    close.addEventListener('click', () => {
        taskModal.close();
    })

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        const title = document.querySelector("#title").value.trim();
        const description = document.querySelector("#description").value.trim();
        const dueDate = document.querySelector("#dueDate").value;
        const priority = document.querySelector("#priority").value;
        const projectName = document.querySelector("#projectSelector").value;
        const project = myProjects.find(p => p.name === projectName);
        taskModal.close();
        project.addTask(title, description, dueDate, priority);
        saveProjectsLocally(myProjects);
        document.querySelector('.taskForm').reset();
        displayTasks(project);
    })
}


projectFormFunctionality();
taskFormFunctionality();
