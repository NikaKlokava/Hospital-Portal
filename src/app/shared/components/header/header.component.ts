import { Component } from '@angular/core';
import { NAVBAR_ITEMS } from 'src/assets/mocks/navbarItems';

@Component({
  selector: 'hp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navbarItems: string[] = NAVBAR_ITEMS;

  login() {
    console.log('login');
  }
}
