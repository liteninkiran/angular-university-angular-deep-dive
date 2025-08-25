import {
    AfterViewInit,
    Component,
    ElementRef,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { COURSES } from '../db-data';
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

    @ViewChildren(CourseCardComponent, { read: ElementRef })
    public cards: QueryList<ElementRef>;

    constructor() {}

    public ngAfterViewInit(): void {}

    public onCourseSelected(course: Course): void {}

    public onToggle(isHighlighted: boolean): void {
        console.log(isHighlighted);
    }
}
