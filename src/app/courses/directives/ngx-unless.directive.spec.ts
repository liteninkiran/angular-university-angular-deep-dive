import { TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxUnlessDirective } from './ngx-unless.directive';

describe('NgxUnlessDirective', () => {
    let templateRefStub: jasmine.SpyObj<TemplateRef<any>>;
    let viewContainerRefStub: jasmine.SpyObj<ViewContainerRef>;

    beforeEach(() => {
        templateRefStub = jasmine.createSpyObj('TemplateRef', ['elementRef']);
        viewContainerRefStub = jasmine.createSpyObj('ViewContainerRef', [
            'createEmbeddedView',
            'clear',
        ]);
    });

    it('should create an instance', () => {
        const directive = new NgxUnlessDirective(
            templateRefStub,
            viewContainerRefStub,
        );
        expect(directive).toBeTruthy();
    });
});
