import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicineTodayComponent } from './list-medicine-today.component';

describe('ListMedicineTodayComponent', () => {
  let component: ListMedicineTodayComponent;
  let fixture: ComponentFixture<ListMedicineTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedicineTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicineTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
