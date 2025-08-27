import {
    Attribute,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent implements OnInit {
    @Input()
    public course: Course;

    @Input()
    public cardIndex: number;

    // Use attribute decorator to prevent Angular from re-checking if input has changed.
    @Input()
    public type: string;

    @Output('courseChanged')
    public courseEmitter = new EventEmitter<Course>();

    constructor(
        private coursesService: CoursesService, //@Attribute('type') private type: string,
    ) {
        //console.log(type);
    }

    public ngOnInit(): void {
        console.log(this.type);
    }

    public onSaveClicked(description: string): void {
        this.courseEmitter.emit({ ...this.course, description });
    }

    public onTitleChanged(title: string) {
        this.course.description = title;
    }
}
