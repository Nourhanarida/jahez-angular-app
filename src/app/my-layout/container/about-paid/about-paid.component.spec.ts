import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPaidComponent } from './about-paid.component';

describe('AboutPaidComponent', () => {
  let component: AboutPaidComponent;
  let fixture: ComponentFixture<AboutPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
