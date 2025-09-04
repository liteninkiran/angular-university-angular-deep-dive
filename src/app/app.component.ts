import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CommonModule],
})
export class AppComponent implements OnInit {
    public counter = signal(0);
    public course = signal({
        id: 1,
        title: 'Angular For Beginners',
    });
    public courses = signal([
        'Angular For Beginners',
        'Reactive Angular',
        'Signals Deep Dive',
    ]);

    constructor() {}

    public ngOnInit(): void {}

    public increment(): void {
        this.counter.update((val) => val + 1);
        this.course.set({
            id: 1,
            title: 'Hello World',
        });
        this.courses.update((courses) => [...courses, 'New Course']);
    }
}
