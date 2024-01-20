import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecentOrdersComponent } from './myrecent-orders.component';

describe('MyrecentOrdersComponent', () => {
  let component: MyrecentOrdersComponent;
  let fixture: ComponentFixture<MyrecentOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyrecentOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyrecentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
