import { Project } from "./classes";
import { displayTasks } from "./dom";
import { differenceInCalendarDays } from "date-fns";
import { saveCategoriesLocally } from "./storage";

const allTasks = new Project("All Tasks");
const todaysTasks = new Project("Today");
const thisWeeksTasks = new Project("This Week");
const upcomingTasks = new Project("Upcoming");
const overdueTasks = new Project("Overdue");
const myCategories = [allTasks, todaysTasks, thisWeeksTasks, upcomingTasks, overdueTasks]

function initializeCategories(allTasks) {
    allTasks.tasks.forEach((task) => {
        updateCategories(task);
    });
    saveCategoriesLocally(myCategories)
}

function updateCategories(task) {
    const today = new Date();
    const taskDue = new Date(task.dueDate.replace(/-/g, '/'));
    const diffInDays = differenceInCalendarDays(taskDue, today);
    if (diffInDays < 0) {
        overdueTasks.tasks.push(task);
    } else {
        upcomingTasks.tasks.push(task);
        if (diffInDays === 0) {
            todaysTasks.tasks.push(task);
        } 
        if (diffInDays <= 7) {
            thisWeeksTasks.tasks.push(task);
        }
    }
}

function removeTaskFromCategories(task) {
    removeTaskFromAllTasks(task);
    let category;
    if (todaysTasks.tasks.includes(task)) {
        category = todaysTasks;
    } else if (thisWeeksTasks.tasks.includes(task)) {
        category = thisWeeksTasks;
    } else if (upcomingTasks.tasks.includes(task)) {
        category = upcomingTasks;
    } else {
        category = overdueTasks;
    }
    const index = category.tasks.indexOf(task);
    if (index !== -1) {
        category.tasks.splice(index, 1);
    }
    saveCategoriesLocally(myCategories);
}

function removeTaskFromAllTasks(task) {
    const index = allTasks.tasks.indexOf(task);
    if (index !== -1) {
        allTasks.tasks.splice(index, 1);
    }
}

function addCategoryBtns() {
    document.querySelector("#all")
            .addEventListener("click", () => displayTasks(allTasks.tasks, allTasks));
    document.querySelector("#today")
            .addEventListener("click", () => displayTasks(todaysTasks.tasks, todaysTasks));
    document.querySelector("#week")
            .addEventListener("click", () => displayTasks(thisWeeksTasks.tasks, thisWeeksTasks));
    document.querySelector("#upcoming")
            .addEventListener("click", () => displayTasks(upcomingTasks.tasks, upcomingTasks));
    document.querySelector("#overdue")
            .addEventListener("click", () => displayTasks(overdueTasks.tasks, overdueTasks));
}

export { allTasks, initializeCategories, removeTaskFromCategories, updateCategories, addCategoryBtns }