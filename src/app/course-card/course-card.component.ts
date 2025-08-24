import {
    AfterViewInit,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
    selector: 'course-card',
    imports: [CommonModule],
    templateUrl: './course-card.component.html',
    styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements AfterViewInit {
    @Input({ required: true })
    public course: Course;

    @Input({ required: true })
    public index: number;

    @Output('courseSelected')
    public courseEmitter = new EventEmitter<Course>();

    @ContentChild(CourseImageComponent, { read: ElementRef })
    public image: ElementRef;

    public ngAfterViewInit(): void {
        console.log(this.image);
    }

    public onCourseView(): void {
        this.courseEmitter.emit(this.course);
    }
}
