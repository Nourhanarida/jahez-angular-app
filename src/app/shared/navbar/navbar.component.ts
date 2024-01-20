import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedserviceService } from 'src/app/services/sharedservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  closeResult: string = '';
  submitted:any;


  constructor(private modalService: NgbModal, private sharedservice:SharedserviceService) {
   this.submitted = this.sharedservice.isSubmit = true;
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason :any) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



  ngOnInit() {
  }

 
  toggleMenu(){
  
  }
}
