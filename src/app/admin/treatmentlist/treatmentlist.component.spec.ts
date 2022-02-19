import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentlistComponent } from './treatmentlist.component';

describe('TreatmentlistComponent', () => {
  let component: TreatmentlistComponent;
  let fixture: ComponentFixture<TreatmentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
