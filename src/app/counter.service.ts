import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    private counterSignal = signal(0);

    public readonly counter = this.counterSignal.asReadonly();

    public increment(): void {
        if (this.counter() >= 10) {
            throw `Maximum value reached`;
        }
        this.counterSignal.update((val) => val + 1);
    }
}
