import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { Course } from 'src/app/model/course';
import { CoursesService } from 'src/app/courses/courses.service';

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
        AfterViewChecked,
        AfterContentInit,
        AfterViewInit,
        DoCheck
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

    public ngDoCheck(): void {
        console.log('Do Check');
    }

    public ngAfterContentInit(): void {
        console.log('After Content Init');
    }

    public ngAfterContentChecked(): void {
        console.log('After Content Checked');
    }

    public ngAfterViewInit(): void {
        console.log('After View Init');
    }

    public ngAfterViewChecked(): void {
        console.log('After View Checked');
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
