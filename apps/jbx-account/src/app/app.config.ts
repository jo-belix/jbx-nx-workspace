import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration, withEventReplay, withI18nSupport, withIncrementalHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay(), withIncrementalHydration(), withI18nSupport()),
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes,withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withFetch()),
  ],
};
