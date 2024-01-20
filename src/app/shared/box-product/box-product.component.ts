import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-box-product',
  templateUrl: './box-product.component.html',
  styleUrls: ['./box-product.component.css']
})
export class BoxProductComponent implements OnInit {

  public form: FormGroup;
  rating3;
  toggle = true;


  constructor(private fb: FormBuilder ){
    this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }

  enableDisableRule() {
      this.toggle = !this.toggle;

  }

  ngOnInit(): void {
  }

}
