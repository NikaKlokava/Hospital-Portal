import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBoxColor]',
})
export class BoxColorDirective implements OnChanges {
  @Input() appBoxColor = '';

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    const creationDate = new Date(this.appBoxColor).getTime();
    const currentDate = new Date();
    const currentDateTime = currentDate.getTime();

    if (creationDate < currentDateTime) {
      this.el.nativeElement.style.boxShadow = `5px 5px 10px #45455b`;
      return;
    }
    if (creationDate > currentDateTime) {
      this.el.nativeElement.style.boxShadow = `5px 5px 10px #a4bc41`;
    }
  }
}
