import { Component, signal } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss',
})
export class SidemenuComponent {
  readonly panelOpenState = signal(false);
}
