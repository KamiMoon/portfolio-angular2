import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'crud',
    templateUrl: './crud.component.html'
})
export class CrudComponent implements OnInit {

    constructor(private taskService: TaskService) { }

    statuses = ['Not Started', 'In Progress', 'Finished'];

    tasks: Task[] = [];
    taskToAdd;

    resetForm() {
        this.taskToAdd = new Task();
    }

    getTasks() {
        this.taskService.get().then(tasks => {
            this.tasks = tasks;
            console.log(this.tasks)
        });
    }

    ngOnInit(): void {
        this.getTasks();
        this.resetForm();
    }

    addTask() {
        console.log(this.taskToAdd);
        this.taskService.create(this.taskToAdd).then(task => {
            this.tasks.push(task);
            this.resetForm();
        });
    }

    deleteTask(task: Task) {
        this.taskService.delete(task.id).then(() => {
            this.tasks = this.tasks.filter(t => t.id !== task.id);
        });
    }

    saveTask(task: Task) {
        this.taskService.update(task);
    }

}
