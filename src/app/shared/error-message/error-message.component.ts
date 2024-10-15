import { Component, Input, input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
})
export class ErrorMessageComponent {
  @Input() control!: NgModel;
  @Input() myRole: string = 'This field is required.';
}
