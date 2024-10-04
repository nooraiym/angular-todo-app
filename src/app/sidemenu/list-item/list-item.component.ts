import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Option } from '../../../data/options';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  @Input({ required: true }) data!: Option;
  @Output() update = new EventEmitter();

  onOptionClick(optionId: string) {
    this.update.emit(optionId);
  }
}
