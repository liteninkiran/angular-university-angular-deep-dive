import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './courses/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from 'src/db-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
})
export class AppComponent implements OnInit {
    public courses = COURSES;

    constructor(
        private coursesService: CoursesService,
        private cd: ChangeDetectorRef,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
    ) {}

    public ngOnInit(): void {}

    public saveCourse(course: Course): void {
        this.coursesService
            .saveCourse(course)
            .subscribe((data) => console.log(data));
    }

    public onEditCourse() {
        this.courses[0].category = 'ADVANCED';
        // this.courses[0] = { ...this.courses[0], category: 'ADVANCED' };
    }
}
