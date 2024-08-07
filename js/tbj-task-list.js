export class TaskList extends HTMLElement {
    constructor() {
        super();
        this.tasks = [];
    }

    connectedCallback() {
        this.render();
    }

    addTask(task) {
        this.tasks.push({ name: task, completed: false });
        this.render();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.render();
    }

    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this.tasks.forEach((task, index) => {
            const taskElement = document.createElement('tbj-task');
            taskElement.setAttribute('data-index', index);
            taskElement.setAttribute('task-name', task.name);
            taskElement.setAttribute('task-completed', task.completed);
            this.appendChild(taskElement);

            const removeButton = taskElement.querySelector('.remove-task');
            removeButton.addEventListener('click', () => {
                this.removeTask(index);
            });

            const checkbox = taskElement.querySelector('.task-checkbox');
            checkbox.addEventListener('change', () => {
                this.toggleTask(index);
            });
        });
    }
}

customElements.define('tbj-task-list', TaskList);
