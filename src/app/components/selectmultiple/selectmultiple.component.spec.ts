import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectmultipleComponent } from './selectmultiple.component';

describe('SelectmultipleComponent', () => {
  let component: SelectmultipleComponent;
  let fixture: ComponentFixture<SelectmultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectmultipleComponent]
    });
    fixture = TestBed.createComponent(SelectmultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
