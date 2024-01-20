import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-paid',
  templateUrl: './about-paid.component.html',
  styleUrls: ['./about-paid.component.css']
})
export class AboutPaidComponent implements OnInit {
  state : string = "قيد الدفع";
  constructor() { }

  ngOnInit(): void {
  }

}
