import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { NewTaskData, TASKS, Task } from '../tasks.model';
import { OptionService } from './option.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private optionService = inject(OptionService);
  private localStorageKey = 'tasks';
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTasksFromLocalStorage();
    }
  }

  private loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem(this.localStorageKey);
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      this.tasksSubject.next(parsedTasks);
    } else {
      this.tasksSubject.next(TASKS);
    }
  }

  private saveTasksToLocalStorage(tasks: Task[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  filterTasks() {
    const optionID = this.optionService.selectedOptionID();
    return this.tasks$.pipe(
      map((tasks) => tasks.filter((task) => task.optionId === optionID))
    );
  }

  addTask(taskData: NewTaskData) {
    const optionID = this.optionService.selectedOptionID();
    if (optionID) {
      const currentTasks = this.tasksSubject.getValue();
      const newTask: Task = {
        id: `t${currentTasks.length + 1}`,
        optionId: optionID,
        ...taskData,
      };
      const updatedTasks = [...currentTasks, newTask];
      this.tasksSubject.next(updatedTasks);
      this.saveTasksToLocalStorage(updatedTasks);
    }
  }

  deleteTask(taskId: string) {
    console.log('DEL');
    const currentTasks = this.tasksSubject.getValue();
    const updatedTasks = currentTasks.filter((task) => task.id !== taskId);
    this.tasksSubject.next(updatedTasks);
    this.saveTasksToLocalStorage(updatedTasks);
  }

  updateTask(updatedTask: Task) {
    const currentTasks = this.tasksSubject.getValue();
    const taskIndex = currentTasks.findIndex(
      (task) => task.id === updatedTask.id
    );

    if (taskIndex !== -1) {
      const updatedTasks = [...currentTasks];
      updatedTasks[taskIndex] = updatedTask;
      this.tasksSubject.next(updatedTasks);
      this.saveTasksToLocalStorage(updatedTasks);
      console.log('Task updated:', updatedTask);
    }
  }
}
