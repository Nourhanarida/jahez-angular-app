import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ended-orders',
  templateUrl: './ended-orders.component.html',
  styleUrls: ['./ended-orders.component.css']
})
export class EndedOrdersComponent implements OnInit {
state :string = "منتهي"
  constructor() { }

  ngOnInit(): void {
  }

}
