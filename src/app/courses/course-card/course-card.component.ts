import {
    Component,
    effect,
    EventEmitter,
    input,
    Input,
    Output,
} from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: true,
})
export class CourseCardComponent {
    public course = input<Course>(null, {
        alias: 'tutorial',
    });

    @Input()
    public cardIndex: number;

    @Output('courseChanged')
    public courseEmitter = new EventEmitter<Course>();

    constructor() {
        effect(() => {
            console.log(`New course: `, this.course());
        });
    }

    public onSaveClicked(description: string): void {
        this.courseEmitter.emit({ ...this.course(), description });
    }

    public onTitleChanged(title: string) {
        this.course().description = title;
    }
}
