import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    QueryList,
    TemplateRef,
} from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
    selector: 'course-card',
    imports: [CommonModule],
    templateUrl: './course-card.component.html',
    styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
    @Input({ required: true })
    public course: Course;

    @Input({ required: true })
    public index: number;

    @Input({ required: true })
    public noImageTpl: TemplateRef<any>;

    @Output('courseSelected')
    public courseEmitter = new EventEmitter<Course>();

    @ContentChildren(CourseImageComponent, { read: ElementRef })
    public images: QueryList<CourseImageComponent>;

    public ngAfterContentInit(): void {
        console.log(this.images);
    }

    public ngAfterViewInit(): void {
        // console.log(this.images);
    }

    public onCourseView(): void {
        this.courseEmitter.emit(this.course);
    }
}
