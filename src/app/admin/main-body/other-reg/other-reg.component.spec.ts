import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRegComponent } from './other-reg.component';

describe('OtherRegComponent', () => {
  let component: OtherRegComponent;
  let fixture: ComponentFixture<OtherRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
