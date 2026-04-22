import { Injectable, signal } from '@angular/core';

export interface Task {
  id: string;
  title: string;
  due: string;
  level: 'baixo' | 'medio' | 'alto';
  desc?: string;
  status: 'Para fazer' | 'Em andamento' | 'Concluídas';
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

@Injectable({ providedIn: 'root' })
export class TaskService {

  tasks = signal<Task[]>(this.seed());

  private seed(): Task[] {
    const addDays = (n: number) => {
      const d = new Date();
      d.setDate(d.getDate() + n);
      return d.toISOString().slice(0, 10);
    };

    return [
      {
        id: uid(),
        title: 'Ler capítulo 3',
        due: addDays(2),
        level: 'alto',
        desc: 'Exercícios',
        status: 'Para fazer'
      },
      {
        id: uid(),
        title: 'Lista TS',
        due: addDays(5),
        level: 'medio',
        desc: 'Generics',
        status: 'Em andamento'
      },
      {
        id: uid(),
        title: 'Revisão HTML',
        due: addDays(10),
        level: 'baixo',
        desc: '',
        status: 'Concluídas'
      }
    ];
  }

  add(task: Omit<Task, 'id'>) {
    this.tasks.update(list => [...list, { ...task, id: uid() }]);
  }

  remove(id: string) {
    this.tasks.update(list => list.filter(t => t.id !== id));
  }

  update(id: string, data: Partial<Task>) {
    this.tasks.update(list =>
      list.map(t => t.id === id ? { ...t, ...data } : t)
    );
  }

  move(id: string, status: Task['status']) {
    this.update(id, { status });
  }
}