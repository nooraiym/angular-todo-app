import { Component } from '@angular/core';
import { OPTIONS, Option } from '../data/options';
import { TASKS, Task } from '../data/tasksData';
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
  selectedOptionId: string | null = null;

  get allOptions() {
    return this.options;
  }
  get selectedOption() {
    return this.options.find((option) => option.id === this.selectedOptionId);
  }
  get selectedTasks() {
    // return this.tasks.filter((task) => task.optionId === this.selectedOptionId);
    return;
  }

  onUpdateOption(optionId: string) {
    console.log(optionId);

    this.selectedOptionId = optionId;
  }
}
