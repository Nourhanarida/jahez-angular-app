import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {
  toggle = true;

  constructor() { }

  ngOnInit(): void {
  }
  enableDisableRule() {
    this.toggle = !this.toggle;

}
}
