import { myProjects, Project, Task } from "./classes";
import { displayProjects } from "./dom";
import { allTasks, initializeCategories } from "./taskCategories";
import { loadProject } from "./dom";

function saveProjectsLocally(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
}

function loadProjectsFromLocalStorage() {
    const projectsData = localStorage.getItem('projects');
    
    if (projectsData) {
        const parsedProjects = JSON.parse(projectsData);
        const projects = parsedProjects.map(projectObj => {
            const project = new Project(projectObj.name); 
            project.tasks = new Project(projectObj.name); 
            project.tasks = projectObj.tasks.map(taskObj => new Task(
                taskObj.title, 
                taskObj.description, 
                taskObj.dueDate, 
                taskObj.priority
            ));
            return project;
        });
        return projects;
    } 
    return [new Project("My Project")];
}

function loadAllTasksFromLocalStorage() {
    const allTasksData = localStorage.getItem('allTasks');
    if (!allTasksData) { return }

    const parsedData = JSON.parse(allTasksData);
    const tasks = parsedData.tasks.map(taskObj => new Task(
        taskObj.title, 
        taskObj.description, 
        taskObj.dueDate, 
        taskObj.priority
    ));
    
    tasks.forEach((task) => {
        allTasks.tasks.push(task);
    });
}


function initializePage() {
    const projects = loadProjectsFromLocalStorage();
    projects.forEach(project => {
        myProjects.push(project);
    });
    loadAllTasksFromLocalStorage();
    initializeCategories(allTasks);
    loadProject(allTasks.tasks, allTasks);
    displayProjects(myProjects);
}


export { initializePage, saveProjectsLocally }