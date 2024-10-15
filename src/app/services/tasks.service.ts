import { Injectable, inject } from '@angular/core';
import { NewTaskData, TASKS, Task } from '../tasks.model';
import { OptionService } from './option.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private optionService = inject(OptionService);
  private tasks: Task[] = TASKS;
  private selectedTasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  filterTasks() {
    this.selectedTasks = this.tasks.filter(
      (task) => task.optionId === this.optionService.selectedOptionID()
    );
    return this.selectedTasks;
  }

  addTask(taskData: NewTaskData) {
    const optionID = this.optionService.selectedOptionID();
    if (optionID) {
      const newTask: Task = {
        id: `t${this.tasks.length + 1}`,
        optionId: optionID,
        ...taskData,
      };
      this.tasks.push(newTask);
    }
  }
}
