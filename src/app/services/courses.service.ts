import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const URL = '/api/courses';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    constructor(private http: HttpClient) {}

    public loadCourses(): Observable<Course[]> {
        const params = new HttpParams().set('page', 1).set('pageSize', 3);
        return this.http.get<Course[]>(URL, { params });
    }

    public saveCourse(course: Course): Observable<Course> {
        const headers = new HttpHeaders().set('X-Auth', 'userId');
        const url = `${URL}/${course.id}`;
        return this.http.put<Course>(url, course, { headers });
    }
}
