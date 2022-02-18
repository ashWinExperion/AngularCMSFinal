import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsAppointComponent } from './patients-appoint.component';

describe('PatientsAppointComponent', () => {
  let component: PatientsAppointComponent;
  let fixture: ComponentFixture<PatientsAppointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsAppointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
