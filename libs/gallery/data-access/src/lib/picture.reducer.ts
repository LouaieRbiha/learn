import { createFeature, createReducer, on } from '@ngrx/store';
import { PictureActions } from './picture.actions';

export const pictureFeatureKey = 'picture';

export interface Picture {
  id: number;
  alt: string;
  src: {
    medium: string;
    large: string;
    tiny: string;
  };
}
export interface PictureState {
  id: number;
  pictures: Picture[];
  currentPictureId: number | null;
}

export const initialState: PictureState = {
  id: 0,
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
  on(PictureActions.loadPicturesFailure, (state, action) => state),
  on(PictureActions.removePicture, (state, action) => {
    return {
      ...state,
      pictures: state.pictures.filter((picture) => picture.id !== action.id),
    };
  }),
);

export const pictureFeature = createFeature({
  name: pictureFeatureKey,
  reducer: pictureReducer,
});
