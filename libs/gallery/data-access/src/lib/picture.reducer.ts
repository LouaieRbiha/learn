import { createFeature, createReducer, on } from '@ngrx/store';
import { PictureActions } from './picture.actions';

export const pictureFeatureKey = 'picture';

export interface Picture {
  alt: string;
  src: {
    medium: string;
  };
}
export interface PictureState {
  pictures: Picture[];
  currentPictureId: number | null;
}

export const initialState: PictureState = {
  pictures: [],
  currentPictureId: null,
};

export const pictureReducer = createReducer(
  initialState,
  on(PictureActions.loadPictures, (state) => state),
  on(PictureActions.loadPicturesSuccess, (state, action) => {
    return {
      ...state,
      pictures: action.pictures,
    };
  }),
  on(PictureActions.loadPicturesFailure, (state, action) => state)
);

export const pictureFeature = createFeature({
  name: pictureFeatureKey,
  reducer: pictureReducer,
});
