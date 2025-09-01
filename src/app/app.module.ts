import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { CoursesModule } from './courses/courses.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoursesModule,
        AppComponent,
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
