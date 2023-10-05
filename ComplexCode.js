/*
File Name: ComplexCode.js

Description: This is a complex JavaScript code that implements a web-based task management system. It allows users to create, manage, and track tasks along with various functionalities including task filtering, sorting, and assignment.

Author: [Your Name]

Date: [Current Date]

*/

// Task class representing a single task with various properties and methods
class Task {
  constructor(title, description, priority, status, assignee, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.status = status;
    this.assignee = assignee;
    this.dueDate = dueDate;
  }

  // Method to change the status of the task
  changeStatus(newStatus) {
    this.status = newStatus;
  }

  // Method to change the assignee of the task
  changeAssignee(newAssignee) {
    this.assignee = newAssignee;
  }

  // More methods can be added as per requirements (e.g., to update due date, add comments, etc.)
}

// TaskManager class representing the task management system
class TaskManager {
  constructor() {
    this.tasks = []; // Array to store the tasks
  }

  // Method to add a new task to the task manager
  addTask(task) {
    this.tasks.push(task);
  }

  // Method to remove a task from the task manager
  removeTask(task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  // Method to filter tasks based on status
  filterByStatus(status) {
    return this.tasks.filter((task) => task.status === status);
  }

  // Method to sort tasks by due date
  sortByDueDate() {
    return this.tasks.sort(
      (taskA, taskB) => new Date(taskA.dueDate) - new Date(taskB.dueDate)
    );
  }

  // More methods can be added as per requirements (e.g., filter by assignee, sort by priority, etc.)
}

// Example usage of the TaskManager class
const taskManager = new TaskManager();

const task1 = new Task(
  "Implement Login Feature",
  "Implement user authentication for the website",
  "High",
  "In Progress",
  "John Doe",
  "2022-12-31"
);

const task2 = new Task(
  "Design Database Schema",
  "Design the database structure for the application",
  "Medium",
  "Not Started",
  "Jane Smith",
  "2022-11-30"
);

taskManager.addTask(task1);
taskManager.addTask(task2);

console.log(taskManager.tasks); // Output: [task1, task2]

const filteredTasks = taskManager.filterByStatus("In Progress");
console.log(filteredTasks); // Output: [task1]

const sortedTasks = taskManager.sortByDueDate();
console.log(sortedTasks); // Output: [task2, task1]