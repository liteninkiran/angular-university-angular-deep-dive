import {
    ChangeDetectorRef,
    Component,
    Inject,
    Injector,
    OnInit,
} from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './courses/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from 'src/db-data';
import { createCustomElement, NgElementConfig } from '@angular/elements';
import { CourseTitleComponent } from './course-title/course-title.component';
import { NgForOf } from '@angular/common';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgForOf, CourseCardComponent, CourseImageComponent],
})
export class AppComponent implements OnInit {
    public courses = COURSES;
    public numCourses = COURSES.length;

    constructor(
        private coursesService: CoursesService,
        private cd: ChangeDetectorRef,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
        private injector: Injector,
    ) {}

    public ngOnInit(): void {
        const config: NgElementConfig = {
            injector: this.injector,
        };
        const htmlElement = createCustomElement(CourseTitleComponent, config);
        customElements.define('course-title', htmlElement);
    }

    public saveCourse(course: Course): void {
        this.coursesService
            .saveCourse(course)
            .subscribe((data) => console.log(data));
    }

    public onEditCourse() {
        this.courses[0].category = 'ADVANCED';
    }
}
