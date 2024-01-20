import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  myForm = this.fb.group({
    firstName: [''],
    lastName: [''],
  })

  preview: string = '';

  ngOnInit(): void {}

  save() {
    this.preview = JSON.stringify(this.myForm.value);
  }
}
