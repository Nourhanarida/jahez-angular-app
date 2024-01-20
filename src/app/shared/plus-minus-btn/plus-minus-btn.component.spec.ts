import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusBtnComponent } from './plus-minus-btn.component';

describe('PlusMinusBtnComponent', () => {
  let component: PlusMinusBtnComponent;
  let fixture: ComponentFixture<PlusMinusBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusMinusBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusMinusBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
