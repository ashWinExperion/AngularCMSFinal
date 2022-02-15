import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsDocComponent } from './appointments-doc.component';

describe('AppointmentsDocComponent', () => {
  let component: AppointmentsDocComponent;
  let fixture: ComponentFixture<AppointmentsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
