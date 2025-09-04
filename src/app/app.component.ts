import { Component, computed, OnInit, signal } from '@angular/core';
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
    public derivedCounter = computed(() => {
        const counter = this.counter();
        return this.multiplier >= 10 ? counter * 10 : 0;
    });
    public multiplier = 0;

    constructor() {}

    public ngOnInit(): void {}

    public incrementCounter(): void {
        this.counter.update((val) => val + 1);
    }

    public incrementMultiplier(): void {
        this.multiplier++;
    }
}
