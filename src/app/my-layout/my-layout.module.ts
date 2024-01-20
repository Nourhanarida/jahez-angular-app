import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TabModule } from '@syncfusion/ej2-angular-navigations';





import { HomeComponent } from './container/home/home.component';
import { AboutAcceptComponent } from './container/about-accept/about-accept.component';
import { AboutPaidComponent } from './container/about-paid/about-paid.component';
import { BestsellingComponent } from './container/bestselling/bestselling.component';
import { ContactComponent } from './container/contact/contact.component';
import { EndedOrdersComponent } from './container/ended-orders/ended-orders.component';
import { FavouriteComponent } from './container/favourite/favourite.component';
import { MyAccountComponent } from './container/my-account/my-account.component';
import { MyrecentOrdersComponent } from './container/myrecent-orders/myrecent-orders.component';
import { NewComponent } from './container/new/new.component';
import { NotificationsComponent } from './container/notifications/notifications.component';
import { OffersComponent } from './container/offers/offers.component';
import { OrdersComponent } from './container/orders/orders.component';
import { ShopsComponent } from './container/shops/shops.component';
import { SharedModule } from '../shared/shared.module';


import { MyLayoutRoutingModule } from './my-layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProfileInfoComponent } from './container/profile-info/profile-info.component';
import { ComplaintsComponent } from './container/complaints/complaints.component';
import { NotifSettingsComponent } from './container/notif-settings/notif-settings.component';
import { WalletComponent } from './container/wallet/wallet.component';
import { AboutUsComponent } from './container/about-us/about-us.component';
import { PrivacypolicyComponent } from './container/privacypolicy/privacypolicy.component';
import { LanguageComponent } from './container/language/language.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { MoreItemsComponent } from './container/more-items/more-items.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutAcceptComponent,
    AboutPaidComponent,
    BestsellingComponent,
    ContactComponent,
    EndedOrdersComponent,
    FavouriteComponent,
    MyAccountComponent,
    MyrecentOrdersComponent,
    NewComponent,
    NotificationsComponent,
    OffersComponent,
    OrdersComponent,
    ShopsComponent,
    LayoutComponent,
    ProfileInfoComponent,
    ComplaintsComponent,
    NotifSettingsComponent,
    WalletComponent,
    AboutUsComponent,
    PrivacypolicyComponent,
    LanguageComponent,
    ProductDetailsComponent,
    MoreItemsComponent,



    
  ],
  imports: [
    CommonModule,
    MyLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxStarRatingModule,
    NgbModule,
    CarouselModule,
    ToastrModule,
    GoogleMapsModule,
    NgxIntlTelInputModule,
    RouterModule,
    SharedModule,
    TabModule,
    
  ]
})
export class MyLayoutModule { }
