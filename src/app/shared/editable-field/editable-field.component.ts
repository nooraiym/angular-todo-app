import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-editable-field',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './editable-field.component.html',
  styleUrl: './editable-field.component.scss',
})
export class EditableFieldComponent {
  @Input() value: string = '';
  @Input() editing: boolean = false;

  @Output() valueChange = new EventEmitter<string>();
  @Output() editingChange = new EventEmitter<boolean>();

  saveEdit() {
    this.editing = false;
    this.editingChange.emit(false);
    this.valueChange.emit(this.value);
  }
}
