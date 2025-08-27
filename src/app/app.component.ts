import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';

const coursesServiceProvider = (http: HttpClient): CoursesService =>
    new CoursesService(http);
export const COURSES_SERVICE = new InjectionToken<CoursesService>(
    'COURSES_SERVICE',
);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    providers: [
        {
            provide: COURSES_SERVICE,
            useFactory: coursesServiceProvider,
            deps: [HttpClient],
        },
    ],
})
export class AppComponent implements OnInit {
    public courses$: Observable<Course[]>;

    constructor(
        @Inject(COURSES_SERVICE) private coursesService: CoursesService,
    ) {}

    public ngOnInit(): void {
        this.courses$ = this.coursesService.loadCourses();
    }

    public saveCourse(course: Course) {
        this.coursesService
            .saveCourse(course)
            .subscribe((data) => console.log(data));
    }
}
