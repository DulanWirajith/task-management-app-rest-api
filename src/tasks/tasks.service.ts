import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.model';

// injectable means we can inject this service any component
@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];

  getAllTasks(): Tasks[] {
    return this.tasks;
  }
}
