import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FirebaseService } from '../../services/firebase.service';
import { RouterModule } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [HeaderComponent],
      providers: [
        FirebaseService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
