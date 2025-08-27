import { Component, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    providers: [CoursesService],
})
export class AppComponent implements OnInit {
    public courses$: Observable<Course[]>;

    constructor(private coursesService: CoursesService) {
        console.log('Courses Service from App', this.coursesService.id);
    }

    public ngOnInit(): void {
        this.courses$ = this.coursesService.loadCourses();
    }

    public saveCourse(course: Course) {
        this.coursesService
            .saveCourse(course)
            .subscribe((data) => console.log(data));
    }
}
