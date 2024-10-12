import { myProjects, Project } from "./classes";
import { addTasktoPage, addProjectToPage } from "./dom";

function saveProjectsLocally(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function loadProjectsFromLocalStorage() {
    const projectsData = localStorage.getItem('projects');
    
    if (projectsData) {
        const parsedProjects = JSON.parse(projectsData);
        const projects = parsedProjects.map(projectObj => {
            const project = new Project(projectObj.name); // Create a new Project instance
            project.tasks = projectObj.tasks.map(taskObj => new Task(
                taskObj.title, 
                taskObj.description, 
                taskObj.dueDate, 
                taskObj.priority,
            ));
            return project;
        });
        return projects;
    }
    return [];
}


function initializeApp() {
    const projects = loadProjectsFromLocalStorage();
    projects.forEach(project => {
        myProjects.push(project);
        addProjectToPage(project);
        project.tasks.forEach(task => addTasktoPage(task)); 
    });
}

export { initializeApp, saveProjectsLocally }