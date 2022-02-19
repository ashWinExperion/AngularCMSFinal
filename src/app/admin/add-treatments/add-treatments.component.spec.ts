import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTreatmentsComponent } from './add-treatments.component';

describe('AddTreatmentsComponent', () => {
  let component: AddTreatmentsComponent;
  let fixture: ComponentFixture<AddTreatmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTreatmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
