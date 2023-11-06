import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PictureService } from './picture.service';
import { PictureActions } from './picture.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

export const loadPicturesEffect = createEffect(
  (actions$ = inject(Actions), pictureService = inject(PictureService)) => {
    return actions$.pipe(
      ofType(PictureActions.loadPictures),
      exhaustMap(() => {
        return pictureService.searchPhotos('cat').pipe(
          map((pictures) => PictureActions.loadPicturesSuccess({ pictures })),
          catchError((error: any) =>
            of(PictureActions.loadPicturesFailure({ error: error.message }))
          )
        );
      })
    );
  },
  { functional: true }
);
