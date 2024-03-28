import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {popperVariation, provideTippyConfig} from "@ngneat/helipopper";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideTippyConfig({
      defaultVariation: 'menu',
      variations: {
        menu: {
          ...popperVariation,
          maxWidth: 600,
          theme: 'ik-menu',
          interactive: true,
          offset: [0, 0],
        },
      },
    }),
  ],
};
