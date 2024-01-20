import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ProfileInfoComponent } from './container/profile-info/profile-info.component';
import { ComplaintsComponent } from './container/complaints/complaints.component';
import {WalletComponent} from './container/wallet/wallet.component'
import { LanguageComponent } from './container/language/language.component';
import { PrivacypolicyComponent } from './container/privacypolicy/privacypolicy.component';
import { AboutUsComponent } from './container/about-us/about-us.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';


const routes: Routes = [
  {path:'',component:HomeComponent, children: [
    { path: 'proddetail', component: ProductDetailsComponent },
]},
  {path:'aboutaccept',component:AboutAcceptComponent},
  {path:'aboutpaid',component:AboutPaidComponent},
  {path:'bestselling',component:BestsellingComponent},
  {path:'contact',component:ContactComponent},
  {path:'endedorders',component:EndedOrdersComponent},
  {path:'favourite',component:FavouriteComponent},
  { path: 'account', component: MyAccountComponent,
  children: [
    { path: 'profile',component:ProfileInfoComponent},
    { path: 'complain', component: ComplaintsComponent },
    { path: 'favourite', component: FavouriteComponent },
    { path: 'wallet', component: WalletComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'language', component: LanguageComponent },
    { path: 'privacy', component: PrivacypolicyComponent },

  ]
},
  {path:'myrecentorder',component:MyrecentOrdersComponent},
  {path:'new',component:NewComponent},
  {path:'notif',component:NotificationsComponent},
  {path:'offers',component:OffersComponent},
  {path:'orders',component:OrdersComponent},
  {path:'shops',component:ShopsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLayoutRoutingModule { }
