import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  getTasks(): Promise<TaskEntity[]> {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  addTask(
    @Body(ValidationPipe) createTaskDto: CreateTaskDto,
  ): Promise<TaskEntity> {
    return this.tasksService.addTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.deleteTaskById(id);
  }
  // @Get()
  // geTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
  //   return Object.keys(filterDto).length
  //     ? this.tasksService.getTasksWithFilters(filterDto)
  //     : this.tasksService.getAllTasks();
  // }
  // //
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
