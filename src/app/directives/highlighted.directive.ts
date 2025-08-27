import {
    Directive,
    EventEmitter,
    Host,
    HostBinding,
    HostListener,
    Input,
    Output,
} from '@angular/core';
import { CoursesService } from '../services/courses.service';

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

    constructor(@Host() private coursesService: CoursesService) {
        console.log(
            'Courses Service from Highlighted directive',
            coursesService.id,
        );
    }

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
