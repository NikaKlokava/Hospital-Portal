import { Component, Input } from '@angular/core';

@Component({
  selector: 'hp-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss'],
})
export class PageBannerComponent {
  @Input() pageTitle!: string;
  @Input() bannerImgUrl!: string;
}
