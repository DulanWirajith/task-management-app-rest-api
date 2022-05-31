import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.COMPLETE,
    TaskStatus.IN_PROGRESS,
  ];

  transform(value: any): any {
    // eslint-disable-next-line no-param-reassign
    value = value.toUpperCase();
    const isValid: boolean = this.isValidValue(value);
    if (!isValid) {
      throw new BadRequestException(`${value} is an invalid status`);
    }
  }

  private isValidValue = (status: any): boolean => {
    const index = this.allowedStatuses.indexOf(status);
    return index !== -1;
  };
}
