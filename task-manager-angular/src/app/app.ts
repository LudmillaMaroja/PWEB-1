import { Component } from '@angular/core';
import { TaskList } from './components/task-list/task-list';
import { TaskForm } from './components/task-form/task-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskList, TaskForm],
  templateUrl: './app.html',
})
export class App {}