
function projectButtonFunctionality() {
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
        addProject(projectName);
        document.querySelector('.projectForm').reset();
        displayProjects();
        displayTasks();
    })
}

function taskButtonFunctionality() {
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
        taskModal.close();
        addTask(title, description, dueDate, priority);
        document.querySelector('.taskForm').reset();
        displayTasks();
    })
}



projectButtonFunctionality();
taskButtonFunctionality();