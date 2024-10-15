import { Component, Input, output } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { type Option } from '../options.model';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [MatListModule, MatDividerModule, ListItemComponent],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss',
})
export class SidemenuComponent {
  @Input({ required: true }) options!: Option[];
  // @Output() update = new EventEmitter();
  update = output<string>();

  onUpdateOption(optionId: string) {
    this.update.emit(optionId);
  }
}
