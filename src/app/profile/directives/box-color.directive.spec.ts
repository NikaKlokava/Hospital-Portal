import { TestBed } from '@angular/core/testing';
import { BoxColorDirective } from './box-color.directive';
import { ViewContainerRef } from '@angular/core';

describe('BoxColorDirective', () => {
  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [ViewContainerRef],
    });
  });

  it('should create an instance', (): void => {
    let elRefMock = {
      nativeElement: document.createElement('div'),
    };

    TestBed.runInInjectionContext((): void => {
      const directive: BoxColorDirective = new BoxColorDirective(elRefMock);
      expect(directive).toBeTruthy();
    });
  });
});
