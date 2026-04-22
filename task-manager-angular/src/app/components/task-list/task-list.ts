import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task';
import { TaskCard } from '../task-card/task-card'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskCard, CommonModule],
  templateUrl: './task-list.html'
})
export class TaskList {

  private service = inject(TaskService);

  tasks = this.service.tasks;
}