import { myProjects, Project, Task, generateUniqueId } from "./classes";
import { displayProjects, addProject } from "./dom";
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
            const project = addProject(projectObj.name); 
            project.tasks = new Project(projectObj.name); 
            project.tasks = projectObj.tasks.map(taskObj => new Task(
                taskObj.title, 
                taskObj.description, 
                taskObj.dueDate, 
                taskObj.priority,
                taskObj.isCompleted
            ));
            return project;
        });
        return projects;
    } 
    return addProject("My Project");
}

function initializeAllTasks() {
    myProjects.forEach((project) => {
        project.tasks.forEach((task) => {
            allTasks.addTask(task);
        });
    })
}


function initializePage() {
    loadProjectsFromLocalStorage();
    initializeAllTasks();
    initializeCategories(allTasks);
    loadProject(allTasks.tasks, allTasks);
    displayProjects(myProjects);
}


export { initializePage, saveProjectsLocally }