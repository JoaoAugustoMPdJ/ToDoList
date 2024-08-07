export class Task extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const taskName = this.getAttribute('task-name');
        const taskCompleted = this.getAttribute('task-completed') === 'true';

        this.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${taskCompleted ? 'checked' : ''}>
            <span>${taskName}</span>
            <button class="remove-task">&times;</button>
        `;
    }
}

customElements.define('tbj-task', Task);
