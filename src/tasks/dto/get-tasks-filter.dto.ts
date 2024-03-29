import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../enums/task-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.COMPLETE, TaskStatus.IN_PROGRESS])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
