import { myProjects, Project, Task } from "./classes";
import { displayProjects, displayTasks } from "./dom";
import { allTasks, initializeCategories } from "./taskCategories";

function saveProjectsLocally(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
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
    return [];
}


function initializePage() {
    const projects = loadProjectsFromLocalStorage();
    projects.forEach(project => {
        myProjects.push(project);
        project.tasks.forEach((task) => { 
            allTasks.tasks.push(task);
        });
    });
    displayTasks(allTasks);
    displayProjects(myProjects);
    initializeCategories(allTasks);
}


export { initializePage, saveProjectsLocally }