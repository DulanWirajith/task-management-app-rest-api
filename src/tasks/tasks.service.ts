import { Injectable } from '@nestjs/common';

// injectable means we can inject this service any component
@Injectable()
export class TasksService {
  private tasks: any[] = [];

  getAllTasks() {
    return this.tasks;
  }
}
