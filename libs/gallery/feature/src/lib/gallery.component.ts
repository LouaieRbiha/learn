import { Component, OnInit, inject } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { PictureActions, selectAllPictures } from '@learn/gallery/data-access';

@Component({
  selector: 'learn-gallery',
  standalone: true,
  imports: [PhotoComponent, AsyncPipe, NgFor, NgIf, JsonPipe],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  // lazy load images with blur
  readonly #store = inject(Store);
  readonly pictures = this.#store.selectSignal(selectAllPictures);

  // readonly pictures$ = this.#store.select(selectAllPictures);

  ngOnInit(): void {
    this.#store.dispatch(PictureActions.loadPictures());
  }
}
