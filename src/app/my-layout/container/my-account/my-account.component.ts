import { LocationStrategy } from '@angular/common';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
active :any
  constructor(private url:LocationStrategy) { }

  ngOnInit(): void {
  
  }
  
}