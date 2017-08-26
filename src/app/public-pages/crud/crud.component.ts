import { Component, OnInit } from '@angular/core';

import { Task } from '../../core/models/task';
import { TaskService } from '../../core/services/task.service';

@Component({
    selector: 'app-crud',
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
        this.taskService.get().subscribe(tasks => {
            this.tasks = tasks;
            console.log(this.tasks);
        });
    }

    ngOnInit(): void {
        this.getTasks();
        this.resetForm();
    }

    addTask() {
        console.log(this.taskToAdd);
        this.taskService.create(this.taskToAdd).subscribe(task => {
            this.tasks.push(task);
            this.resetForm();
        });
    }

    deleteTask(task: Task) {
        this.taskService.delete(task._id).subscribe(() => {
            this.tasks = this.tasks.filter(t => t._id !== task._id);
        });
    }

    saveTask(task: Task) {
        this.taskService.update(task).subscribe(() => {

        });
    }

}
