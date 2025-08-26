import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: false,
})
export class CourseCardComponent implements OnInit {
    @Input()
    public course: Course;

    @Input()
    public cardIndex: number;

    @Output('courseChanged')
    public courseEmitter = new EventEmitter<Course>();

    constructor() {}

    public ngOnInit(): void {}

    public onSaveClicked(description: string): void {
        this.courseEmitter.emit({ ...this.course, description });
    }
}
