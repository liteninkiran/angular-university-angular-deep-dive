import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
    selector: 'course-card',
    imports: [],
    templateUrl: './course-card.component.html',
    styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
    @Input({ required: true })
    public course: Course;

    @Output('courseSelected')
    public courseEmitter = new EventEmitter<Course>();

    public onCourseView(): void {
        this.courseEmitter.emit(this.course);
    }
}
