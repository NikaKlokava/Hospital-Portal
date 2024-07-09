import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hp-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() tabTitle: string = '';
  @Input() active = false;
  @Input() index = 0;

  ngOnInit(): void {
    if (this.index === 0) {
      this.active = true;
    }
  }
}
