import { myProjects, Project, Task } from "./classes"
import { displayTasks, addProject } from "./dom"
import { saveProjectsLocally } from "./storage"
import { updateCategories, allTasks } from "./taskCategories"
import { loadProject, deleteTask } from "./dom"

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
    const taskModal = document.querySelector('.taskModal');
    const close = document.querySelector('.taskClose');
    const submit = document.querySelector('.taskSubmit');

    const titleInput = document.querySelector("#title");
    const descriptionInput = document.querySelector("#description");
    const dueDateInput = document.querySelector("#dueDate");
    const priorityInput = document.querySelector("#priority");
    const projectNameInput = document.querySelector("#projectSelector");

    titleInput.value = task.title;
    descriptionInput.value = task.description;
    dueDateInput.value = task.dueDate;
    priorityInput.value = task.priority;
    projectNameInput.value = project.name;

    document.querySelector('.taskModal').showModal();

    submit.removeEventListener('click', handleSubmit);
    close.removeEventListener('click', handleClose);
    close.addEventListener('click', handleClose);
    submit.addEventListener('click', handleSubmit);

    function handleClose() {
        taskModal.close();
    }

    function handleSubmit(event) {
        event.preventDefault();
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;
        const selectedProjectName = projectNameInput.value;
        const newProject = myProjects.find(p => p.name === selectedProjectName);
        task.edit(title, description, dueDate, priority, project, newProject);
        console.log(project)
        console.log(newProject)
        updateCategories(task);
        saveProjectsLocally(myProjects);

        document.querySelector('.taskForm').reset(); 
        document.querySelector('.taskModal').close();

        displayTasks(newProject);
    }
}

projectFormFunctionality();
taskFormFunctionality();

export { editProject, editTask }