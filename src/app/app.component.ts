import { Component, OnInit, inject } from '@angular/core';
import { NewTaskData, TASKS, Task } from '../data/tasksData';
import { HeaderComponent } from './header/header.component';
import { Option } from './options.model';
import { OptionService } from './services/option.service';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SidemenuComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private optionService = inject(OptionService);
  tasks: Task[] = TASKS;
  selectedTasks: Task[] = [];

  selectedOptionId: string | undefined;
  allOptions!: Option[];
  selectedOption: Option | undefined;

  ngOnInit() {
    this.selectedOptionId = this.optionService.selectedOptionId;
    this.allOptions = this.optionService.allOptions();
    this.selectedOption = this.optionService.selectedOption();
    // console.log('Initial selectedOptionId: ', this.selectedOptionId);
  }

  get selectedTasksData() {
    return this.selectedTasks;
  }

  onUpdateOption(optionId: string) {
    this.optionService.updateSelectedOption(optionId);
    this.selectedOptionId = this.optionService.selectedOptionId;
    this.selectedOption = this.optionService.selectedOption();
    // console.log('Updated selectedOptionId: ', this.selectedOptionId);

    this.selectedTasks = this.tasks.filter(
      (task) => task.optionId === optionId
    );
  }
  onAddTask(taskData: NewTaskData) {
    if (this.selectedOptionId) {
      const newTask: Task = {
        id: `t${this.tasks.length + 1}`,
        optionId: this.selectedOptionId,
        ...taskData,
      };
      this.tasks.push(newTask);
    }
  }
}
