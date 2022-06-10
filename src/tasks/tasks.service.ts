import { Injectable } from '@nestjs/common';

// injectable means we can inject this service any component
@Injectable()
export class TasksService {
  // constructor(
  //   @InjectRepository(TaskRepository)
  //   private taskRepository: TaskRepository,
  // ) {}
  //
  // async getAllTasks(id: any): Promise<TaskEntity> {
  //   const found = await this.taskRepository.findOne(id);
  //   return found;
  // }
  //
  // addTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //
  //   const task: Task = {
  //     id: randomUUID(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  //
  // getTaskById(id: string) {
  //   const found: Task = this.tasks.find((task: Task) => task.id === id);
  //   if (!found) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_FOUND,
  //         error: `task with id ${id} not found`,
  //       },
  //       HttpStatus.NOT_FOUND,
  //     );
  //     // throw new NotFoundException(`task with id ${id} not found`);
  //   }
  //   return found;
  // }
  //
  // deleteTaskById(id: string): void {
  //   const found = this.getTaskById(id.toString());
  //   this.tasks = this.tasks.filter((task: Task) => task.id !== found.id);
  // }
  //
  // updateTaskStatusById(id: string, status: TaskStatus): Task {
  //   const task: Task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
  //
  // getTasksWithFilters(filterDto: GetTasksFilterDto) {
  //   const { status, search } = filterDto;
  //   let tasks: Task[] = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task: Task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       (task: Task) =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }
  //   return tasks;
  // }
}
