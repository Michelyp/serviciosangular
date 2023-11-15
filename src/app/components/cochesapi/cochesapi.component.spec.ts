import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesapiComponent } from './cochesapi.component';

describe('CochesapiComponent', () => {
  let component: CochesapiComponent;
  let fixture: ComponentFixture<CochesapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CochesapiComponent]
    });
    fixture = TestBed.createComponent(CochesapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
