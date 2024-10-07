import { Component } from '@angular/core';
import { OPTIONS, Option } from '../data/options';
import { NewTaskData, TASKS, Task } from '../data/tasksData';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SidemenuComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  options: Option[] = OPTIONS;
  tasks: Task[] = TASKS;
  selectedOptionId!: string;
  selectedTasks: Task[] = [];

  get allOptions() {
    return this.options;
  }
  get selectedOption() {
    return this.options.find((option) => option.id === this.selectedOptionId);
  }
  get selectedTasksData() {
    return this.selectedTasks;
  }

  onUpdateOption(optionId: string) {
    this.selectedOptionId = optionId;
    this.selectedTasks = this.tasks.filter(
      (task) => task.optionId === optionId
    );
  }
  onAddTask(taskData: NewTaskData) {
    const newTask: Task = {
      id: `t${this.tasks.length + 1}`,
      optionId: this.selectedOptionId,
      ...taskData,
    };
    this.tasks.push(newTask);
  }
}
