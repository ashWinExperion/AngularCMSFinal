import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTestTodayComponent } from './list-test-today.component';

describe('ListTestTodayComponent', () => {
  let component: ListTestTodayComponent;
  let fixture: ComponentFixture<ListTestTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTestTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTestTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
