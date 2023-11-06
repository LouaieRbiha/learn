import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PictureState } from './picture.reducer';

export const selectPicturesState =
  createFeatureSelector<PictureState>('Picture');

export const selectAllPictures = createSelector(
  selectPicturesState,
  (state: PictureState) => state.pictures
);
