import { Component, inject } from '@angular/core'; // Adicionado o inject aqui
import { TaskCard } from './components/task-card/task-card'; // Importar o Card
import { TaskForm } from './components/task-form/task-form'; // Importar o Form
import { TaskService } from './services/task'; // Importar o Serviço

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskCard, TaskForm], 
  templateUrl: './app.html',
})
export class AppComponent {
  taskService = inject(TaskService);
}