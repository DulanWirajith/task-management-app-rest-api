import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Task, TaskStatus } from './task.model';

// injectable means we can inject this service any component
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string, description: string): Task {
    const task: Task = {
      id: randomUUID(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
