import {
    Component,
    EventEmitter,
    Inject,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { COURSES_SERVICE } from '../app.component';

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

    constructor(
        @Inject(COURSES_SERVICE) private coursesService: CoursesService,
    ) {}

    public ngOnInit(): void {
        console.log('Courses Service from Course Card', this.coursesService);
    }

    public onSaveClicked(description: string): void {
        this.courseEmitter.emit({ ...this.course, description });
    }
}
