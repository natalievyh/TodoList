import { myProjects, Project, Task } from "./classes";
import { displayProjects } from "./dom";
import { allTasks, initializeCategories } from "./taskCategories";
import { loadProject } from "./dom";

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
    return [new Project("My Project")];
}


function initializePage() {
    const projects = loadProjectsFromLocalStorage();
    projects.forEach(project => {
        myProjects.push(project);
        project.tasks.forEach((task) => { 
            allTasks.tasks.push(task);
        });
    });
    initializeCategories(allTasks);
    loadProject(allTasks.tasks, allTasks);
    displayProjects(myProjects);
}


export { initializePage, saveProjectsLocally }