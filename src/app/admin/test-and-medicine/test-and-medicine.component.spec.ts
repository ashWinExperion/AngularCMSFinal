import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAndMedicineComponent } from './test-and-medicine.component';

describe('TestAndMedicineComponent', () => {
  let component: TestAndMedicineComponent;
  let fixture: ComponentFixture<TestAndMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAndMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAndMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
