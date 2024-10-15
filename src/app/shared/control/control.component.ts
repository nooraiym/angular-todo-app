import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
})
export class ControlComponent {
  @Input({ required: true }) label!: string;
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  ngAfterContentInit() {
    if (this.control) {
      this.control.nativeElement.addEventListener(
        'click',
        this.onClick.bind(this)
      );
    }
  }

  onClick() {
    console.log('Click');
    console.log(this.control);
  }
}
