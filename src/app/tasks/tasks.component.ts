import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewTaskData, Task } from '../../data/tasksData';
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
  @Input({ required: true }) tasks!: Task[];
  @Input() addTask!: (taskData: NewTaskData) => void;
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
}
