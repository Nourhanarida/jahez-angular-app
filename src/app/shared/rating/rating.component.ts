import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  public form: FormGroup;
  rating3;
  toggle = true;


  constructor(private fb: FormBuilder ){
    this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['4', Validators.required],
    })
  }

  enableDisableRule() {
      this.toggle = !this.toggle;

  }

  ngOnInit(): void {
  }

}
