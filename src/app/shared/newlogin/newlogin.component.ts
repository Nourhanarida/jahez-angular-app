import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {
  isSubmitted = false;
  City: any = ['مصر ', 'العراق ', 'تونس', 'المغرب'];
  //for google map
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 22.2736308,
      lng: 70.7512555
  };
  zoom = 6;
  // for modal
  closeResult: string = '';
 

  
  constructor(private modalService: NgbModal,public fb: FormBuilder) {}
  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]],
  });
  changeCity(e: any) {
    this.cityName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter
  // for select country
  get cityName() {
    return this.registrationForm.get('cityName');
  }
  onSubmit(): void {
    console.log(this.registrationForm);
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.registrationForm.value));
    }
  }


  // for google map

moveMap(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) this.center = (event.latLng.toJSON());
}
move(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) this.display = event.latLng.toJSON();
}
// for modal
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
