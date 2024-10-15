import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Option } from './options.model';
import { OptionService } from './services/option.service';
import { TasksService } from './services/tasks.service';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { Task } from './tasks.model';
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
  private tasksService = inject(TasksService);
  selectedTasks: Task[] = [];

  selectedOptionId: string | undefined;
  allOptions!: Option[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && sessionStorage.getItem('todoAppLoaded')) {
      localStorage.clear();
      sessionStorage.setItem('todoAppLoaded', 'true');
      console.log('LocalStorage has been cleared on first load');
    }
    this.selectedOptionId = this.optionService.selectedOptionID();
    this.allOptions = this.optionService.allOptions();
  }

  get selectedTasksData() {
    return this.selectedTasks;
  }

  onUpdateOption(optionId: string) {
    this.optionService.updateSelectedOption(optionId);
    this.selectedOptionId = this.optionService.selectedOptionID();
    console.log('Updated selectedOptionId: ', this.selectedOptionId);

    this.selectedTasks = this.tasksService.filterTasks();
  }
}
