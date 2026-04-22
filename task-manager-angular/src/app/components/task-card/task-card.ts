import { Component, Input, inject } from '@angular/core';
import { Task, TaskService } from '../../services/task';

@Component({
  selector: 'app-task-card',
  standalone: true,
  templateUrl: './task-card.html'
})
export class TaskCard {

  @Input() task!: Task; 

  private service = inject(TaskService);

  delete() {
    this.service.remove(this.task.id);
  }

  move(status: Task['status']) {
    this.service.move(this.task.id, status);
  }
}