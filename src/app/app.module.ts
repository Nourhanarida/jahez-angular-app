
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
// import { SharedserviceService } from './services/sharedservice.service';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { SharedModule } from './shared/shared.module'; 
import { MyLayoutModule } from './my-layout/my-layout.module';




@NgModule({
  declarations: [
    AppComponent,
    


  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    NgxStarRatingModule,
    ReactiveFormsModule,


    TabModule,
  
    SharedModule,
    MyLayoutModule,
    NgbModule,
    CarouselModule,
    ToastrModule.forRoot(),
    GoogleMapsModule,
    NgxIntlTelInputModule,

  ],
  providers: [  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
