import {
    AfterViewInit,
    Component,
    ElementRef,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { COURSES, EXTRA_COURSE } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
})
export class AppComponent implements AfterViewInit {
    public courses = COURSES;
    public imgSource =
        'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png';

    @ViewChildren(CourseCardComponent, { read: ElementRef })
    public cards: QueryList<CourseCardComponent>;

    constructor() {}

    public ngAfterViewInit(): void {
        this.cards.changes.subscribe((cards) => console.log(cards));
    }

    public onCourseSelected(course: Course) {}

    public onCoursesEdited() {
        this.courses.push(EXTRA_COURSE);
    }
}
