import { Component, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
})
export class AppComponent implements OnInit {
    public courses$: Observable<Course[]>;

    constructor(private coursesService: CoursesService) {}

    public ngOnInit(): void {
        this.courses$ = this.coursesService.loadCourses();
    }

    public saveCourse(course: Course) {
        this.coursesService
            .saveCourse(course)
            .subscribe((data) => console.log(data));
    }
}
