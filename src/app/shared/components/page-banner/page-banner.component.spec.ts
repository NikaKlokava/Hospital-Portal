import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBannerComponent } from './page-banner.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PageBannerComponent', () => {
  let component: PageBannerComponent;
  let fixture: ComponentFixture<PageBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageBannerComponent],

      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
