import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './courses/courses.service';

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
}
