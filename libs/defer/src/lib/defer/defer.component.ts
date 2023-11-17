import { Component } from '@angular/core';
import { OtpComponent } from '@learn/shared/otp';

@Component({
  selector: 'learn-defer',
  standalone: true,
  imports: [OtpComponent],
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.scss'],
})
export class DeferComponent {
  test = false;
}
