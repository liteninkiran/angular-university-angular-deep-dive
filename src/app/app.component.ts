import {
    AfterViewInit,
    Component,
    ElementRef,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

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

    // @ViewChild(HighlightedDirective)
    // public highlighted: HighlightedDirective;

    @ViewChild(CourseCardComponent, { read: HighlightedDirective })
    public highlighted: HighlightedDirective;

    constructor() {}

    public ngAfterViewInit(): void {
        console.log(this.highlighted);
    }

    public onCourseSelected(course: Course): void {}

    public onToggle(isHighlighted: boolean): void {
        // console.log(isHighlighted);
    }
}
