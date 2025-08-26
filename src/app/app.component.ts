import { Component, OnInit } from '@angular/core';
import { COURSES } from '../db-data';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    constructor(
        private http: HttpClient,
        private coursesService: CoursesService,
    ) {}

    public ngOnInit(): void {
        const params = new HttpParams().set('page', 1).set('pageSize', 3);
        this.courses$ = this.http.get<Course[]>('/api/courses', { params });
    }
}
