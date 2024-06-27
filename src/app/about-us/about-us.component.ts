import { Component } from '@angular/core';
import { PAGES } from '../shared/constants';
import { PageData } from './about-us.model';

@Component({
  selector: 'hp-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  pageData: PageData = PAGES.about;
}
