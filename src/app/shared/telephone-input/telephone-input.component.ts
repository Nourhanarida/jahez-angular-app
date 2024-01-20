import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-telephone-input',
  templateUrl: './telephone-input.component.html',
  styleUrls: ['./telephone-input.component.css']
})
export class TelephoneInputComponent implements OnInit {
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  preferredCountries: CountryISO[] = [CountryISO.UnitedStates,
   CountryISO.UnitedKingdom];




  constructor(public fb: FormBuilder) {}
  // registrationForm = this.fb.group({
  //   cityName: ['', [Validators.required]],
  // });
 

  ngOnInit(): void {
  }

}
