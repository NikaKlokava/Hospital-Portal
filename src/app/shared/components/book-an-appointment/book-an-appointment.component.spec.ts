import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAnAppointmentComponent } from './book-an-appointment.component';

describe('BookAnAppointmentComponent', () => {
  let component: BookAnAppointmentComponent;
  let fixture: ComponentFixture<BookAnAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAnAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAnAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
