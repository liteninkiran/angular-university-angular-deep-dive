import { Component, OnInit } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './courses/courses.service';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CourseCardComponent, CourseImageComponent, CommonModule],
})
export class AppComponent implements OnInit {
    public courses$: Observable<Course[]>;

    constructor(private coursesService: CoursesService) {}

    public ngOnInit(): void {
        this.courses$ = this.coursesService.loadCourses();
    }

    public saveCourse(course: Course): void {
        this.coursesService
            .saveCourse(course)
            .subscribe((data) => console.log(data));
    }
}
