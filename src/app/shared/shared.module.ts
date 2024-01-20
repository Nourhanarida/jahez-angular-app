import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BoxProductComponent } from './box-product/box-product.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { HeaderComponent } from './header/header.component';
import { FilterBtnComponent } from './filter-btn/filter-btn.component';
import { PlusMinusBtnComponent } from './plus-minus-btn/plus-minus-btn.component';
import { HeartComponent } from './heart/heart.component';
import { ChooseRegisterComponent } from './choose-register/choose-register.component';
import { TelephoneInputComponent } from './telephone-input/telephone-input.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    LogoComponent,
    FooterComponent,
    NewloginComponent,
    BoxProductComponent,
    RatingComponent,
    HeaderComponent,
    FilterBtnComponent,
    PlusMinusBtnComponent,
    HeartComponent,
    ChooseRegisterComponent,
    TelephoneInputComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgxStarRatingModule,
    FormsModule,
    GoogleMapsModule,
    NgxIntlTelInputModule,
    TooltipModule.forRoot(),
    NgbTooltipModule,
    
  

  ],
  exports:[
    NavbarComponent,
    LoginComponent,
    LogoComponent,
    FooterComponent,
    NewloginComponent,
    BoxProductComponent,
    RatingComponent,
    HeaderComponent,
    FilterBtnComponent,
    PlusMinusBtnComponent,
    HeartComponent,
    ChooseRegisterComponent,
    TelephoneInputComponent,
 

  ]
})
export class SharedModule { }
