import { createFeature, createReducer, on } from '@ngrx/store';
import { PictureActions } from './picture.actions';

export const pictureFeatureKey = 'picture';

export interface State {
  label: string;
  description: string;
  url: string;
}

export const initialState: State = {
  label: '',
  description: '',
  url: '',
};

export const reducer = createReducer(
  initialState,
  on(PictureActions.loadPictures, (state) => state),
  on(PictureActions.loadPicturesSuccess, (state, action) => state),
  on(PictureActions.loadPicturesFailure, (state, action) => state)
);

export const pictureFeature = createFeature({
  name: pictureFeatureKey,
  reducer,
});
