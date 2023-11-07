import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  OnInit,
  computed,
  effect,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'learn-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent implements OnInit {
  /**
   * computed is a readonly signal and type signal is also a readonly signal
   * WritableSignal type can be updated
   */
  readonly #http = inject(HttpClient);
  readonly #injector = inject(Injector);

  @Input() id!: string;
  @Input() title!: string;

  updateMeSig = signal<number>(0);

  dateSignal = signal<number>(Date.now());
  Obs$: Observable<string> = of('test');

  effectRef = effect(
    () => {
      console.log('called', this.dateSignal());

      // to update signals inside effect you must add { allowSignalWrites: true }
      this.updateMeSig.update((prev) => prev + 1);

      console.log('this.updateMeSig() :>> ', this.updateMeSig());

      return this.#http.get(
        'https://api.github.com/users/learn-angular-maintainers' +
          this.dateSignal()
      );
    },
    { allowSignalWrites: true }
  );

  ngOnInit(): void {
    console.log('this.id :>> ', this.id);
    console.log('this.title :>> ', this.title);

    runInInjectionContext(this.#injector, () => {
      const obs = toObservable(this.dateSignal)
        .pipe(
          map((data) => {
            console.log('data', data);
            return data;
          })
        )
        .subscribe();

      const sig = toSignal(this.Obs$);
      console.log('sig', sig());
    });
  }

  setDateSignal() {
    this.dateSignal.set(Date.now());
  }
}
