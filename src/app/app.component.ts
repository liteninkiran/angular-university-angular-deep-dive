import { Component, computed, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CommonModule],
})
export class AppComponent implements OnInit {
    public counter = this.counterService.counter();
    public derivedCounter = computed(() => this.counterService.counter() * 10);

    constructor(public counterService: CounterService) {}

    public ngOnInit(): void {}

    public incrementCounter(): void {
        this.counterService.increment();
    }
}
