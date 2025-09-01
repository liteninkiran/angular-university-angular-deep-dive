import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

if (environment.production) {
    enableProdMode();
}

registerLocaleData(localeFr);

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(), // ✅ Provide HttpClient globally
    ],
}).catch((err) => console.error(err));
