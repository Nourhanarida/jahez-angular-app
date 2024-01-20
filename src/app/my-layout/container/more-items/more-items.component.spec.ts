import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreItemsComponent } from './more-items.component';

describe('MoreItemsComponent', () => {
  let component: MoreItemsComponent;
  let fixture: ComponentFixture<MoreItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
