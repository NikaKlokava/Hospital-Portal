import { Component } from '@angular/core';
import { NAVBAR_ITEMS } from './navbar';
import { NavbarItem } from './navbar.model';

@Component({
  selector: 'hp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navbarItems: NavbarItem[] = NAVBAR_ITEMS;

  login(): void {
    console.log('login');
  }

  trackByFn(_i: number, item: NavbarItem): string {
    return item.title;
  }
}
