import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { NewTaskData, TASKS, Task } from '../tasks.model';
import { OptionService } from './option.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private optionService = inject(OptionService);
  private localStorageKey = 'tasks';
  private tasks: Task[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTasksFromLocalStorage();
    }
  }

  private loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem(this.localStorageKey);
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      console.log(this.tasks);
    } else {
      this.tasks = TASKS;
    }
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  filterTasks() {
    return this.tasks.filter(
      (task) => task.optionId === this.optionService.selectedOptionID()
    );
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
      this.saveTasksToLocalStorage();
    }
  }
}
