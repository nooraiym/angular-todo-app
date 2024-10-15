import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Task } from '../../tasks.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, MatCardModule, MatCheckboxModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
