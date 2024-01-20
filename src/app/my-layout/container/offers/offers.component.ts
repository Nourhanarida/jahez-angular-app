import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/services/sharedservice.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  title :any;
  constructor(private sharedserv : SharedserviceService) {
    this.title = this.sharedserv.title = "العروض" ;
  
  }

  ngOnInit(): void {
  }

}
