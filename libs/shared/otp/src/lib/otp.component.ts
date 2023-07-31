import { Component, OnInit } from '@angular/core';
import { OtpInputComponent } from './otpInput/otp-input.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'learn-otp',
  standalone: true,
  imports: [OtpInputComponent, NgForOf],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  otpCode!: number[];
  otpCodeInputNumber = 4;

  ngOnInit(): void {
    this.otpCode = new Array(this.otpCodeInputNumber).fill(0);
  }
}
