import { Component, ViewChild } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

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

    @ViewChild(CourseCardComponent)
    public card: CourseCardComponent;

    public onCourseSelected(course: Course) {
        console.log(this.card);
    }
}
