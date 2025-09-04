import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: true,
})
export class CourseCardComponent implements OnInit, OnChanges {
    @Input()
    public course: Course;

    @Input()
    public cardIndex: number;

    @Output('courseChanged')
    public courseEmitter = new EventEmitter<Course>();

    constructor() {}

    public ngOnInit(): void {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['course']) {
            console.log(`New course: `, this.course);
        }
    }

    public onSaveClicked(description: string): void {
        this.courseEmitter.emit({ ...this.course, description });
    }

    public onTitleChanged(title: string) {
        this.course.description = title;
    }
}
