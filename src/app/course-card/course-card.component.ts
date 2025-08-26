import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: false,
    encapsulation: ViewEncapsulation.None,
})
export class CourseCardComponent
    implements OnInit, AfterViewInit, AfterContentInit
{
    @Input()
    public course: Course;

    @Input()
    public cardIndex: number;

    @Input({ required: true })
    public noImageTpl: TemplateRef<any>;

    @Output('courseSelected')
    public courseEmitter = new EventEmitter<Course>();

    @ContentChildren(CourseImageComponent, { read: ElementRef })
    public images: QueryList<ElementRef>;

    constructor() {}

    public ngAfterViewInit(): void {}

    public ngAfterContentInit(): void {}

    public ngOnInit(): void {}

    public isImageVisible(): string {
        return this.course && this.course.iconUrl;
    }

    public onCourseViewed(): void {
        this.courseEmitter.emit(this.course);
    }

    public cardClasses(): string {
        if (this.course.category == 'BEGINNER') {
            return 'beginner';
        }
    }

    public cardStyles(): { [key: string]: string } {
        return {
            'background-image': 'url(' + this.course.iconUrl + ')',
        };
    }
}
