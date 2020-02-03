import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiedComponent } from './lied.component';

describe('LiedComponent', () => {
  let component: LiedComponent;
  let fixture: ComponentFixture<LiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
