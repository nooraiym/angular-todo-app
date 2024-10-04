import { Component, Input, Output } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { EventEmitter } from 'stream';
import { type Option } from '../../data/options';
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
  @Output() update = new EventEmitter();

  onUpdateOption(optionId: string) {
    this.update.emit(optionId);
  }
}
