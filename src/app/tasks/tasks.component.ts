import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TasksService } from '../services/tasks.service';
import { NewTaskData, Task } from '../tasks.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, MatButtonModule, MatDialogModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  private tasksService = inject(TasksService);
  @Input({ required: true }) tasks!: Task[];
  isAddingNewTask = false;

  readonly dialog = inject(MatDialog);

  onStartNewTaskAdd(): void {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      width: '450px',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '200ms',
    });
    dialogRef.componentInstance.add.subscribe((newTaskData: NewTaskData) => {
      this.addTask(newTaskData);
    });
  }
  addTask(newTaskData: NewTaskData) {
    this.tasksService.addTask(newTaskData);
    this.tasksService.filterTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
