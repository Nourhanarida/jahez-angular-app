import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
   
  userName : string = ""; //for name input will edit
  email : string = ""; //for email input will edit
  title : string = ""; //for title input selected form map will edit

  isSubmitted = false;

  City: any = ['الرياض ', 'جدة ', 'مكة', 'المدينة المنورة'];
  //for google map
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 22.2736308,
      lng: 70.7512555
  };
  zoom = 6;
  // for modal
  closeResult: string = '';
  reason :any;
phoneForm = new FormGroup({
  phone: new FormControl(undefined, [Validators.required])
});

constructor(private modalService: NgbModal,public fb: FormBuilder, private router : Router) {}
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
deleteAccount(){
  
  
}

  ngOnInit(): void {
  }

}
