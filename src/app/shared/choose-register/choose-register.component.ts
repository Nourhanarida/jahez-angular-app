import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-choose-register',
  templateUrl: './choose-register.component.html',
  styleUrls: ['./choose-register.component.css']
})
export class ChooseRegisterComponent implements OnInit {
  closeResult: string = '';


  constructor(private modalService: NgbModal) {}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason :any) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  ngOnInit(): void {
  }

}
