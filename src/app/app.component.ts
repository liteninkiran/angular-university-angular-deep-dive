import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
})
export class AppComponent {
    public courses = COURSES;
    public imgSource =
        'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png';

    public onCourseSelected(course: Course) {
        console.log('Course Selected', course);
    }
}
