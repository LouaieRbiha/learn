import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'learn-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent implements OnInit {
  readonly #http = inject(HttpClient);

  @Input() id!: string;
  @Input() title!: string;

  dateSignal = signal<number>(Date.now());

  effectRef = effect(() => {
    console.log('called', this.dateSignal());
    return this.#http.get(
      'https://api.github.com/users/learn-angular-maintainers' +
        this.dateSignal()
    );
  });

  ngOnInit(): void {
    console.log('this.id :>> ', this.id);
    console.log('this.title :>> ', this.title);
  }

  setDateSignal() {
    this.dateSignal.set(Date.now());
  }
}
