import { Project } from "./classes";
import { displayTasks } from "./dom";

const allTasks = new Project("All Tasks");
const todaysTasks = new Project("Today");
const thisWeeksTasks = new Project("This Week");
const upcomingTasks = new Project("Upcoming");
const overdueTasks = new Project("Overdue");
const completedTasks = new Project("Completed");


function initializeCategories(allTasks) {
    allTasks.tasks.forEach((task) => {
        updateCategories(task);
    });
}

/* 
@returns: 1 if due today, 2 if due this week, 
    3 if due after this week, and 4 if overdue
*/
function dueBy(dueDate) {
    const today = new Date();
    const taskDue = new Date(dueDate);
    const oneDayInMs = 24 * 60 * 60 * 1000;
    
    const diffInMs = taskDue - today;
    const diffInDays = Math.floor(diffInMs / oneDayInMs);
    
    if (diffInDays === 0) {
        return 1; // Due today
    } else if (diffInDays > 0 && diffInDays <= 7) {
        return 2; // Due this week
    } else if (diffInDays > 7) {
        return 3; // Upcoming
    } else {
        return 4; // Overdue
    }
}

function updateCategories(task) {
    if (dueBy(task.dueDate) == 1) {
        todaysTasks.tasks.push(task);
    } else if (dueBy(task.dueDate) == 2) {
        thisWeeksTasks.tasks.push(task);
    } else if (dueBy(task.dueDate) == 3) {
        upcomingTasks.tasks.push(task);
    } else {
        overdueTasks.tasks.push(task);
    }
}

function removeTaskFromCategories(task) {
    removeTaskFromAllTasks(task);
    let category;
    if (todaysTasks.tasks.includes(task)) {
        category = todaysTasks.tasks;
    } else if (thisWeeksTasks.tasks.includes(task)) {
        category = thisWeeksTasks.tasks;
    } else if (upcomingTasks.tasks.includes(task)) {
        category = upcomingTasks.tasks;
    } else {
        category = overdueTasks.tasks;
    }
    const index = category.indexOf(task);
    if (index !== -1) {
        category.splice(index, 1);
    }
}

function removeTaskFromAllTasks(task) {
    const index = allTasks.tasks.indexOf(task);
    if (index !== -1) {
        allTasks.tasks.splice(index, 1);
    }
}

function addCategoryBtns() {
    document.querySelector("#all")
            .addEventListener("click", () => displayTasks(allTasks));
    document.querySelector("#today")
            .addEventListener("click", () => displayTasks(todaysTasks));
    document.querySelector("#week")
            .addEventListener("click", () => displayTasks(thisWeeksTasks));
    document.querySelector("#upcoming")
            .addEventListener("click", () => displayTasks(upcomingTasks));
    document.querySelector("#overdue")
            .addEventListener("click", () => displayTasks(overdueTasks));
    document.querySelector("#completed")
            .addEventListener("click", () => displayTasks(completedTasks));
}

export { allTasks, initializeCategories, removeTaskFromCategories, updateCategories, addCategoryBtns }