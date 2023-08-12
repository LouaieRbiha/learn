import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'learn-otp-input',
  standalone: true,
  imports: [],
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpInputComponent {}
