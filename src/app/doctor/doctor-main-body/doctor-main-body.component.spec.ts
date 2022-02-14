import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMainBodyComponent } from './doctor-main-body.component';

describe('DoctorMainBodyComponent', () => {
  let component: DoctorMainBodyComponent;
  let fixture: ComponentFixture<DoctorMainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorMainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
