import { ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'learn-worker',
  standalone: true,
  imports: [],
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
})
export class WorkerComponent {
  readonly #cd = inject(ChangeDetectorRef);
  #worker!: Worker;

  isDisabled = false;

  callWorker(time: number) {
    this.#worker = new Worker(
      new URL(
        '../../../../apps/app1/learn/src/app/web.worker.ts',
        import.meta.url
      )
    );

    this.#worker.onmessage = ({ data }) => {
      console.log(`component got message ${data}`);

      this.isDisabled = data;

      this.#cd.detectChanges();
    };

    this.isDisabled = true;
    this.#worker.postMessage(time);
  }
}
