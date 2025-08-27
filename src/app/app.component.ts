import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    Inject,
    OnInit,
} from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, DoCheck {
    public courses: Course[];
    private loaded = false;

    constructor(
        private coursesService: CoursesService,
        private cd: ChangeDetectorRef,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
    ) {}

    public ngDoCheck(): void {
        console.log('Do Check');
        if (this.loaded) {
            this.cd.markForCheck();
            console.log('Called cd.markForCheck()');
            this.loaded = undefined;
        }
    }

    public ngOnInit(): void {
        this.coursesService.loadCourses().subscribe((courses) => {
            this.courses = courses;
            this.loaded = true;
            this.cd.markForCheck();
        });
    }

    public saveCourse(course: Course): void {
        this.coursesService
            .saveCourse(course)
            .subscribe((data) => console.log(data));
    }

    public onEditCourse() {
        this.courses[1].category = 'ADVANCED';
    }
}
