import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndedOrdersComponent } from './ended-orders.component';

describe('EndedOrdersComponent', () => {
  let component: EndedOrdersComponent;
  let fixture: ComponentFixture<EndedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndedOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
