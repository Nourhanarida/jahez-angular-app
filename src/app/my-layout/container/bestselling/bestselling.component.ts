import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-bestselling',
  templateUrl: './bestselling.component.html',
  styleUrls: ['./bestselling.component.css']
})
export class BestsellingComponent implements OnInit {
 
  title ="الأكثر مبيعا";

  image = "../../../../assets/imgs/product.png";
  imageTwo = "../../../../assets/imgs/product.png";
  imageThree = "../../../../assets/imgs/product.png";
  imageFour = "../../../../assets/imgs/product.png";

  products:any = [this.image , this.imageTwo ,this.imageThree, this.imageFour];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  constructor() { }

  ngOnInit(): void {
  }

}
