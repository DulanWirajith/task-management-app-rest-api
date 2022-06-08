import { Controller } from '@nestjs/common';

@Controller('/tasks')
export class TasksController {
  // constructor(private tasksService: TasksService) {}
  // @Get()
  // geTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
  //   return Object.keys(filterDto).length
  //     ? this.tasksService.getTasksWithFilters(filterDto)
  //     : this.tasksService.getAllTasks();
  // }
  //
  // @Post()
  // addTask(@Body(ValidationPipe) createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.addTask(createTaskDto);
  // }
  //
  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }
  //
  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): void {
  //   return this.tasksService.deleteTaskById(id);
  // }
  //
  // @Patch('/:id/status')
  // updateTaskStatusById(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  // ): Task {
  //   return this.tasksService.updateTaskStatusById(id, status);
  // }
}
