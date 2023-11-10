import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { provideEffects } from '@ngrx/effects';
import * as pictureEffects from '@learn/gallery/data-access';
import { provideState } from '@ngrx/store';
import { pictureReducer } from '@learn/gallery/data-access';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'otp',
    loadComponent: () =>
      import('@learn/shared/otp').then((m) => m.OtpComponent),
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('@learn/shared/tabs').then((m) => m.TabDisplayComponent),
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('@learn/gallery/feature').then((m) => m.GalleryComponent),
    providers: [
      provideEffects(pictureEffects as any),
      provideState('Picture', pictureReducer),
    ],
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('@learn/signals').then((m) => m.SignalsComponent),
  },
  {
    path: 'signals/:id',
    loadComponent: () =>
      import('@learn/signals').then((m) => m.SignalsComponent),
    data: {
      title: 'Learn',
    },
  },
  {
    path: 'graph',
    loadComponent: () => import('@learn/graph').then((m) => m.GraphComponent),
  },
];
