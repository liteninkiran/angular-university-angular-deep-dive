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
    // public get cssClasses() {
    //     return 'highlighted';
    // }

    // @HostBinding('style.border')
    // public get cssStyles() {
    //     return '1px solid red';
    // }

    @HostBinding('class.highlighted')
    public get cssClasses() {
        return this.isHighlighted;
    }

    @HostBinding('attr.disabled')
    public get disabled() {
        return true;
    }

    @HostListener('mouseover', ['$event'])
    public mouseOver($event: Event) {
        // console.log($event);
        this.isHighlighted = true;
        this.toggleHighlighted.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
    public mouseLeave() {
        this.isHighlighted = false;
        this.toggleHighlighted.emit(this.isHighlighted);
    }
}
