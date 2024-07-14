import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';
import { FirebaseService } from '../shared/services/firebase.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsComponent, TabComponent, TabsComponent],
      providers: [
        FirebaseService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
