import { myProjects, Project, Task } from "./classes";
import { displayProjects } from "./dom";
import { allTasks, initializeCategories } from "./taskCategories";
import { loadProject } from "./dom";

function saveProjectsLocally(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function saveCategoriesLocally(categories) {
    localStorage.setItem("categories", JSON.stringify(categories));
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

function loadCategoriesFromLocalStorage() {
    const categoriesData = localStorage.getItem('categories');

    const parsedCategories = JSON.parse(categoriesData);
    const categories = parsedCategories.map(categoryObj => {
        const category = new Project(categoryObj.name); 
        category.tasks = new Project(categoryObj.name); 
        category.tasks = categoryObj.tasks.map(taskObj => new Task(
            taskObj.title, 
            taskObj.description, 
            taskObj.dueDate, 
            taskObj.priority
        ));
        return category;
    });
    return categories;
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


export { initializePage, saveProjectsLocally, saveCategoriesLocally }