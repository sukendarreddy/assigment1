import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealofdayComponent } from './dealofday.component';

describe('DealofdayComponent', () => {
  let component: DealofdayComponent;
  let fixture: ComponentFixture<DealofdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealofdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealofdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
