import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointComponent } from './add-appoint.component';

describe('AddAppointComponent', () => {
  let component: AddAppointComponent;
  let fixture: ComponentFixture<AddAppointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
