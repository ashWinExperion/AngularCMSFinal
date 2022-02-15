import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistMainBodyComponent } from './receptionist-main-body.component';

describe('ReceptionistMainBodyComponent', () => {
  let component: ReceptionistMainBodyComponent;
  let fixture: ComponentFixture<ReceptionistMainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistMainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
