import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  closeResult: string = '';
  preview: string = ''; //for form
  constructor(private modalService: NgbModal) { }

  jobForm = new FormGroup({
    firstName: new FormControl(''),
    password: new FormControl(''),
  });


  ngOnInit(): void {}

  save() {
    this.preview = JSON.stringify(this.jobForm.value);
    console.log(this.preview);
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason :any) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
