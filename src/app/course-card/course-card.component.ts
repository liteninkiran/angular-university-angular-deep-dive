import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChange,
    SimpleChanges,
} from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: false,
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges {
    @Input()
    public course: Course;

    @Input()
    public cardIndex: number;

    @Output('courseChanged')
    public courseEmitter = new EventEmitter<Course>();

    constructor(private coursesService: CoursesService) {
        console.log('Constructor', this.course);
    }

    public ngOnInit(): void {
        console.log('On Init', this.course);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    public ngOnDestroy(): void {
        console.log('On Destroy');
    }

    public onSaveClicked(description: string): void {
        this.courseEmitter.emit({ ...this.course, description });
    }

    public onTitleChanged(title: string) {
        this.course.description = title;
    }
}
