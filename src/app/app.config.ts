import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled', // Aktiverar scroll till #fragment
        scrollPositionRestoration: 'enabled', // Valfritt: återställer scroll vid bakåtnavigering,
      })), 
    provideClientHydration(withEventReplay())
  ]
};

