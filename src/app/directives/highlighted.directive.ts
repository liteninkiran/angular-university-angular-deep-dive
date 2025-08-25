import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[highlighted]',
})
export class HighlightedDirective {
    @Input({
        alias: 'highlighted',
        transform: (value: unknown) => value === true,
    })
    public isHighlighted = false;

    constructor() {}

    // @HostBinding('className')
    // get cssClasses() {
    //     return 'highlighted';
    // }

    // @HostBinding('style.border')
    // get cssStyles() {
    //     return '1px solid red';
    // }

    @HostBinding('class.highlighted')
    get cssClasses() {
        return this.isHighlighted;
    }

    @HostBinding('attr.disabled')
    get disabled() {
        return true;
    }
}
