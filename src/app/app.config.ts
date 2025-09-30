import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { UUID_TOKEN } from './injection tokens/uuid.injection-token';
//import {} from 'uuid';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withDebugTracing()),
    {
      provide: UUID_TOKEN,
      useValue: () => 'stana hata n installiw uuid',
    },
    provideAnimations(),
    provideToastr({}),
  ],
};
