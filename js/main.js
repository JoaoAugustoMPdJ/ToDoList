import { TaskList } from './tbj-task-list.js';
import { Task } from './tbj-task.js';

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('addTarefa');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskName = taskInput.value.trim();
        if (taskName) {
            taskList.addTask(taskName);
            taskInput.value = '';
            taskInput.focus();
        }
    });
});
