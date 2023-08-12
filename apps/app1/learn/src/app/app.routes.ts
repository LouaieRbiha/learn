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
];
