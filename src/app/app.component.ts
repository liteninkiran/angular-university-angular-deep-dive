import { Component, Inject, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    // // NOT tree-shakable:
    // providers: [
    //     {
    //         provide: CONFIG_TOKEN,
    //         // useFactory: () => APP_CONFIG,
    //         useValue: APP_CONFIG,
    //     },
    // ],
})
export class AppComponent implements OnInit {
    public courses$: Observable<Course[]>;

    constructor(
        private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
    ) {
        console.log(this.config);
    }

    public ngOnInit(): void {
        this.courses$ = this.coursesService.loadCourses();
    }

    public saveCourse(course: Course): void {
        this.coursesService
            .saveCourse(course)
            .subscribe((data) => console.log(data));
    }
}
