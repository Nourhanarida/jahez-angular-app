import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAcceptComponent } from './about-accept.component';

describe('AboutAcceptComponent', () => {
  let component: AboutAcceptComponent;
  let fixture: ComponentFixture<AboutAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAcceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
