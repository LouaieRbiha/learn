import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'otp',
  },
  {
    path: 'otp',
    loadComponent: () =>
      import('@learn/shared/otp').then((m) => m.OtpComponent),
  },
];
