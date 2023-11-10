import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'learn-worker',
  standalone: true,
  imports: [],
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
})
export class WorkerComponent implements OnInit {
  readonly #cd = inject(ChangeDetectorRef);
  worker: Worker = new Worker(
    new URL(
      '../../../../apps/app1/learn/src/app/web.worker.ts',
      import.meta.url
    )
  );

  isDisabled = false;

  ngOnInit(): void {
    this.worker.onmessage = ({ data }) => {
      console.log(`component got message ${data}`);

      this.isDisabled = data;

      this.#cd.detectChanges();
    };
  }

  callWorker(time: number) {
    this.isDisabled = true;
    this.worker.postMessage(time);
  }
}
