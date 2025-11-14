import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { UUID_TOKEN } from './injection tokens/uuid.injection-token';
import { v4 as uuidV4 } from 'uuid';
import { LOGGER_TOKEN } from './injection tokens/logger.injection-token';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';
import { Logger3Service } from './services/logger3.service';
import { provideHttpClient } from '@angular/common/http';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { CustomPreloadingStrategy } from './preloading strategies/custom.preloading-strategy';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withPreloading(CustomPreloadingStrategy)
      //withPreloading(PreloadAllModules)
      // withDebugTracing()
    ),
    {
      provide: UUID_TOKEN,
      useValue: uuidV4,
    },

    {
      provide: LOGGER_TOKEN,
      useClass: LoggerService,
      multi: true,
    },
    {
      provide: LOGGER_TOKEN,
      useClass: Logger2Service,
      multi: true,
    },
    {
      provide: LOGGER_TOKEN,
      useClass: Logger3Service,
      multi: true,
    },
    importProvidersFrom(NgxUiLoaderModule.forRoot({})),
    provideAnimations(),
    provideToastr({}),
    provideHttpClient(),
  ],
};
