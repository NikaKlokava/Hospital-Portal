import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabElement } from './tabs.model';

@Component({
  selector: 'hp-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  selectTab(tab: TabElement): void {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    tab.active = true;
  }
}
