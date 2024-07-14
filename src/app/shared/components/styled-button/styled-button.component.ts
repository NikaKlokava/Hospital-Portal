import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hp-styled-button',
  templateUrl: './styled-button.component.html',
  styleUrls: ['./styled-button.component.scss'],
})
export class StyledButtonComponent {
  @Input() btnText!: string;
  @Input() btnType!: string;
  @Input() disabled!: boolean;
  @Output() btnClick = new EventEmitter<any>();

  onClick(): void {
    this.btnClick.emit();
  }
}
