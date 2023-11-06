import { Route } from '@angular/router';
import { AppComponent } from './app.component';

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
];
