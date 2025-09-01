import { Component, Input } from '@angular/core';

@Component({
    selector: 'course-title',
    templateUrl: './course-title.component.html',
    styleUrl: './course-title.component.css',
    standalone: true,
})
export class CourseTitleComponent {
    @Input() public title: string;
}
