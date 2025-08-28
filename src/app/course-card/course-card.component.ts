import {
    AfterContentChecked,
    AfterViewChecked,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
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
export class CourseCardComponent
    implements
        OnInit,
        OnDestroy,
        OnChanges,
        AfterContentChecked,
        AfterViewChecked
{
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

    public ngAfterContentChecked(): void {
        console.log('After Content Checked');
        this.course.description = 'After Content Checked';
        this.course.category = 'ADVANCED';

        // // This will generate a ExpressionChangedAfterItHasBeenCheckedError error because iconUrl is used in the content of the component
        // this.course.iconUrl = '';
    }

    public ngAfterViewChecked(): void {
        console.log('After View Checked');

        // // This will generate a ExpressionChangedAfterItHasBeenCheckedError error
        // this.course.description = 'After View Checked';
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
