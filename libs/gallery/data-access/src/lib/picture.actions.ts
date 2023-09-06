import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const PictureActions = createActionGroup({
  source: 'Picture',
  events: {
    'Load Pictures': emptyProps(),
    'Load Pictures Success': props<{ data: unknown }>(),
    'Load Pictures Failure': props<{ error: unknown }>(),
  }
});
