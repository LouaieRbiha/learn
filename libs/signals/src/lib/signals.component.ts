import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'learn-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {}
