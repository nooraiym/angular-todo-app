import { Component, Input, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Option } from '../../options.model';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  @Input({ required: true }) data!: Option;
  // @Output() update = new EventEmitter();
  update = output<string>();

  onOptionClick(optionId: string) {
    this.update.emit(optionId);
  }
}
