/* eslint-disable @angular-eslint/no-input-rename */
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'learn-otp-input',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpInputComponent implements AfterViewInit {
  @ViewChild('otpInput') otpInput!: ElementRef;
  @Input({ required: true }) inputValue: string | number = 0;

  ngAfterViewInit(): void {
    console.log('this.otpInput :>> ', this.otpInput.nativeElement.value);
  }
}
