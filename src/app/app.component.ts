import { Component, Inject, OnInit } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
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
        @Inject(CONFIG_TOKEN) private config: AppConfig,
    ) {}

    public ngOnInit(): void {}

    public saveCourse(course: Course): void {
        this.coursesService
            .saveCourse(course)
            .subscribe((data) => console.log(data));
    }

    public onEditCourse(): void {
        const description = 'New Value';
        const course: Course = this.courses[0];
        const newCourse: Course = { ...course, description };
        this.courses[0] = newCourse;
        // this.courses[0].description = description;
    }
}
