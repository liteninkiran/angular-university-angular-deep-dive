import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'course-card',
    imports: [CommonModule],
    templateUrl: './course-card.component.html',
    styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
    @Input({ required: true })
    public course: Course;

    @Input({ required: true })
    public index: number;

    @Output('courseSelected')
    public courseEmitter = new EventEmitter<Course>();

    public onCourseView(): void {
        this.courseEmitter.emit(this.course);
    }

    public cardClasses() {
        if (this.course.category === 'BEGINNER') {
            return ['beginner'];
        }

        return {
            beginner: this.course.category === 'BEGINNER',
        };
    }

    public cardStyles() {
        if (this.course.iconUrl) {
            return {
                'background-image': `url(${this.course.iconUrl})`,
            };
        }
    }
}
