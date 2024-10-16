import { redisplayTasks } from "./dom";

const compareStrings = (a, b) => {
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
}

const compareDates = (a, b) => { 
    const aDate = new Date(a.dueDate.replace(/-/g, '/'));
    const bDate = new Date(b.dueDate.replace(/-/g, '/'));
    return aDate - bDate; 
}

const comparePriority = (a, b) => {
    const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
}

function sortTasks(sortMode, project) {
    let sortedTasks = [...project.tasks];
    if (sortMode !== "Default") {
        sortedTasks.sort((a, b) => {
            let result = 0;
            switch (sortMode) {
                case "Name":
                    result = compareStrings(a.title, b.title); 
                    break;
                case "Date":
                    result = compareDates(a, b); 
                    break;
                case "Priority":
                    result = comparePriority(a, b); 
                    break;
                default:
                    return 0;
            }
            return result;
        });
    }
    redisplayTasks(sortedTasks, project);
}

export function sortFunctionality(project) {
    const dropInput = document.querySelector("#dropInput");
    const sortMode = dropInput.value;        
    sortTasks(sortMode, project);

    dropInput.addEventListener("change", () => {
        const sortMode = dropInput.value;        
        sortTasks(sortMode, project);
    });
}
