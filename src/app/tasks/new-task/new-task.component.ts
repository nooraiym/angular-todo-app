import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { ControlComponent } from '../../shared/control/control.component';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';
import { type NewTaskData } from '../../tasks.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatButtonModule,
    FormsModule,
    ControlComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  readonly dialogRef = inject(MatDialogRef<NewTaskComponent>);
  @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newTaskData: NewTaskData = {
        title: this.enteredTitle.trim(),
        summary: this.enteredSummary.trim(),
        dueDate: this.enteredDate,
      };
      this.add.emit(newTaskData);
      this.onCancel();
    } else {
      console.log('Form is invalid');
    }
  }
}
