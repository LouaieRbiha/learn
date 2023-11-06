import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { type Observable, map, BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'learn-otp',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NgIf],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  /** All reactive */
  // listen to array changes with rxjs (done)
  // listen to input event
  // listen to mouseEvent
  // redo the otp with functions and better logic$

  private arrSource = new BehaviorSubject<any[]>(Array(4).fill(null));
  arr$: Observable<any[]> = this.arrSource.asObservable();

  myObs$!: Observable<boolean>;

  ngOnInit(): void {
    this.myObs$ = this.arr$.pipe(
      map((data) => data.every((value) => value !== null))
    );
  }

  fillArray(index: number, value: number): void {
    this.arr$
      .pipe(
        map((arr) => {
          arr[index] = value;
          return arr;
        }),
        take(1)
      )
      .subscribe({
        next: (updatedArr) => this.arrSource.next(updatedArr),
        complete: () => console.log('completed'),
      });
  }
}
