import { Component, inject } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { PictureService } from '@learn/gallery/data-access';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'learn-gallery',
  standalone: true,
  imports: [PhotoComponent, AsyncPipe, NgIf],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  readonly #pictureService = inject(PictureService);
  readonly photos$ = this.#pictureService.searchPhotos('space');
}
