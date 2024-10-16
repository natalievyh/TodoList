import { myProjects, Project, Task } from "./classes"
import { displayTasks, addProject } from "./dom"
import { saveProjectsLocally } from "./storage"
import { updateCategories, allTasks } from "./taskCategories"
import { loadProject } from "./dom"

function projectFormFunctionality() {
    const projectModal = document.querySelector('.projectModal');
    const newProject = document.querySelector('.newProjectButton');
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
        const projectName = document.querySelector('#projectInput').value.trim();
        const project = addProject(projectName);
        saveProjectsLocally(myProjects);
        document.querySelector('.projectForm').reset();
        projectModal.close();
        loadProject(project.tasks, project);

    })
}

function taskFormFunctionality() {
    const taskModal = document.querySelector('.taskModal');
    const newTaskBtns = document.querySelectorAll('.newTaskButton');
    const close = document.querySelector('.taskClose');
    const submit = document.querySelector('.taskSubmit');

    newTaskBtns.forEach((newTaskBtn) => 
        newTaskBtn.addEventListener("click", () => { 
            taskModal.showModal() 
        }
    ));

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
        if (title === "") {
            alert("Please enter a title.");
            return;
        }
        if (isNaN(new Date(dueDate))) {
            alert("Please enter a valid date.");
            return;
        }
        taskModal.close();
        const task = new Task(title, description, dueDate, priority);
        project.addTask(task);
        allTasks.tasks.push(task);
        updateCategories(task);
        saveProjectsLocally(myProjects);
        document.querySelector('.taskForm').reset();
        displayTasks(project.tasks, project);
    })
}


function editProject(project) {
    
}

function editTask(task, project) {
    
}

projectFormFunctionality();
taskFormFunctionality();

export { editProject, editTask }