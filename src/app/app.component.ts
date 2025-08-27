import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit,
} from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    public courses$: Observable<Course[]>;
    // public courses: Course[] = [];

    constructor(
        private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
    ) {}

    public ngOnInit(): void {
        this.courses$ = this.coursesService.loadCourses();
        // // Won't work with OnPush CD
        // this.coursesService
        //     .loadCourses()
        //     .subscribe((courses) => (this.courses = courses));
    }

    public saveCourse(course: Course): void {
        this.coursesService
            .saveCourse(course)
            .subscribe((data) => console.log(data));
    }
}
