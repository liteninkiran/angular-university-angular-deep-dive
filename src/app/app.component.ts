import {
    Component,
    computed,
    effect,
    EffectRef,
    OnInit,
    signal,
} from '@angular/core';
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
    public effectRef: EffectRef;

    constructor() {
        this.effectRef = effect(
            (onCleanup) => {
                onCleanup(() => {
                    console.log('Clean Up');
                });
                const counterValue = this.counter();
                const derivedValue = this.derivedCounter();
                console.log(
                    `Counter: ${counterValue} | Derived: ${derivedValue}`,
                );
            },
            {
                allowSignalWrites: true,
                manualCleanup: true,
                debugName: 'myEffect',
            },
        );
    }

    public ngOnInit(): void {}

    public incrementCounter(): void {
        this.counter.update((val) => val + 1);
    }

    public onCleanup(): void {
        this.effectRef.destroy();
    }
}
