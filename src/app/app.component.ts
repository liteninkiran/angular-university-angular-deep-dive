import { Component, computed, effect, OnInit, signal } from '@angular/core';
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
    public derivedCounter = computed(() => this.counter() * 10);

    constructor() {
        effect(
            () => {
                const counterValue = this.counter();
                const derivedValue = this.derivedCounter();
                console.log(
                    `Counter: ${counterValue} | Derived: ${derivedValue}`,
                );
            },
            {
                allowSignalWrites: true, // Depracated, always true
                manualCleanup: false,
                debugName: 'myEffect',
            },
        );
    }

    public ngOnInit(): void {}

    public incrementCounter(): void {
        this.counter.update((val) => val + 1);
    }
}
