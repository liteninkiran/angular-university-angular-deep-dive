import { Component, OnInit } from '@angular/core';
import { COURSES } from '../db-data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
})
export class AppComponent implements OnInit {
    public courses: Course[] = [];

    constructor(private http: HttpClient) {}

    public ngOnInit(): void {
        const params = new HttpParams().set('page', 1).set('pageSize', 3);
        const obs = this.http.get<Course[]>('/api/courses', { params });
        obs.subscribe((courses) => (this.courses = courses));
    }
}
