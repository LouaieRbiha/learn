import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const PictureActions = createActionGroup({
  source: 'Picture',
  events: {
    'Load Pictures': emptyProps(),
    'Load Pictures Success': props<{ pictures: any }>(),
    'Load Pictures Failure': props<{ error: string }>(),
    'Remove Picture': props<{ id: number }>(),
  },
});
