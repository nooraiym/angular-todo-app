import { DatePipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TasksService } from '../../services/tasks.service';
import { EditableFieldComponent } from '../../shared/editable-field/editable-field.component';
import { Task } from '../../tasks.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    DatePipe,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    EditableFieldComponent,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  private tasksService = inject(TasksService);
  @Input({ required: true }) task!: Task;

  editingTitle: boolean = false;
  editingDueDate: boolean = false;
  editingSummary: boolean = false;

  onDelete(taskId: string) {
    this.tasksService.deleteTask(taskId);
  }

  onFieldChange(field: string, newValue: string, task: Task) {
    const updatedTask = { ...task, [field]: newValue };
    this.tasksService.updateTask(updatedTask);
  }
}
