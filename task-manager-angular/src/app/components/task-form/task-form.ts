import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html'
})
export class TaskForm {

  private service = inject(TaskService);

  title = '';
  due = '';
  level: 'baixo' | 'medio' | 'alto' = 'baixo';
  desc = '';

  submit() {
    if (!this.title || !this.due) return;

    this.service.add({
      title: this.title,
      due: this.due,
      level: this.level,
      desc: this.desc,
      status: 'Para fazer'
    });

    this.title = '';
    this.due = '';
    this.desc = '';
  }
}