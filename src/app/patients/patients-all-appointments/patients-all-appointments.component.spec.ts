import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsAllAppointmentsComponent } from './patients-all-appointments.component';

describe('PatientsAllAppointmentsComponent', () => {
  let component: PatientsAllAppointmentsComponent;
  let fixture: ComponentFixture<PatientsAllAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsAllAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsAllAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
