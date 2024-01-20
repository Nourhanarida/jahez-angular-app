import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myrecent-orders',
  templateUrl: './myrecent-orders.component.html',
  styleUrls: ['./myrecent-orders.component.css']
})
export class MyrecentOrdersComponent implements OnInit {

state :string = "جاري التجهيز ";
  constructor() { }

  ngOnInit(): void {
  }

}
