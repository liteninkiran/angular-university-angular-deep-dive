import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    computed,
    input,
} from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: true,
})
export class CourseCardComponent implements OnInit {
    public course = input<Course>();

    @Input()
    public cardIndex: number;

    @Output('courseChanged')
    public courseEmitter = new EventEmitter<Course>();

    constructor() {}

    public ngOnInit(): void {
        const description = computed(() => {
            const course = this.course();
            return `${course.description} (${course.category})`;
        });
    }

    public onSaveClicked(description: string): void {
        this.courseEmitter.emit({ ...this.course(), description });
    }

    public onTitleChanged(title: string) {
        this.course().description = title;
    }
}
