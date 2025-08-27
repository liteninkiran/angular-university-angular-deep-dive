import {
    Directive,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    Output,
} from '@angular/core';

@Directive({
    selector: '[highlighted]',
    exportAs: 'hl',
    standalone: false,
})
export class HighlightedDirective {
    @Input('highlighted')
    public isHighlighted = false;

    @Output()
    public toggleHighlight = new EventEmitter();

    constructor() {}

    @HostBinding('class.highlighted')
    public get cssClasses(): boolean {
        return this.isHighlighted;
    }

    @HostListener('mouseover', ['$event'])
    public mouseOver($event: Event): void {
        this.isHighlighted = true;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
    public mouseLeave(): void {
        this.isHighlighted = false;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    public toggle(): void {
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighlight.emit(this.isHighlighted);
    }
}
