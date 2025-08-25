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
})
export class HighlightedDirective {
    @Input({
        alias: 'highlighted',
        transform: (value: unknown) => value === true,
    })
    public isHighlighted = false;

    @Output()
    public toggleHighlighted = new EventEmitter<boolean>();

    constructor() {}

    // @HostBinding('className')
    // public get cssClasses(): string {
    //     return 'highlighted';
    // }

    // @HostBinding('style.border')
    // public get cssStyles(): string {
    //     return '1px solid red';
    // }

    @HostBinding('class.highlighted')
    public get cssClasses(): boolean {
        return this.isHighlighted;
    }

    @HostBinding('attr.disabled')
    public get disabled(): boolean {
        return true;
    }

    @HostListener('mouseover', ['$event'])
    public mouseOver($event: Event): void {
        // console.log($event);
        this.isHighlighted = true;
        this.toggleHighlighted.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
    public mouseLeave(): void {
        this.isHighlighted = false;
        this.toggleHighlighted.emit(this.isHighlighted);
    }

    public toggle(): void {
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighlighted.emit(this.isHighlighted);
    }
}
