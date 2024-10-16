import { Project } from "./classes";
import { displayTasks } from "./dom";
import { differenceInCalendarDays } from "date-fns";

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
    myCategories.forEach(category => {
        if (category.tasks.includes(task)) {
            category.removeTask(task);
        }
    });

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