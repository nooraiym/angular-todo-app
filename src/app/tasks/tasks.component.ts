import { Component, Input } from '@angular/core';
import { Task } from '../../data/tasksData';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) tasks!: Task[];
}
