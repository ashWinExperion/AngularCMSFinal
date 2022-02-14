import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavCommanComponent } from './side-nav-comman.component';

describe('SideNavCommanComponent', () => {
  let component: SideNavCommanComponent;
  let fixture: ComponentFixture<SideNavCommanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavCommanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavCommanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
