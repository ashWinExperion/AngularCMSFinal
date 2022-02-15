import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointReceComponent } from './appoint-rece.component';

describe('AppointReceComponent', () => {
  let component: AppointReceComponent;
  let fixture: ComponentFixture<AppointReceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointReceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointReceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
