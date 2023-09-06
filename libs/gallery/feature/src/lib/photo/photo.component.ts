import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'learn-photo',
  standalone: true,
  imports: [],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent {}
