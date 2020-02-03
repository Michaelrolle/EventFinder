import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtiestComponent } from './artiest.component';

describe('ArtiestComponent', () => {
  let component: ArtiestComponent;
  let fixture: ComponentFixture<ArtiestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtiestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtiestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
