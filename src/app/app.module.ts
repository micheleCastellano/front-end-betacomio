import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/core/navbar/navbar.component';
import { FooterComponent } from 'src/core/footer/footer.component';

/* custom imports */
import { HomeComponent } from 'src/core/home/home.component';
import { LoginComponent } from 'src/core/login/login.component';
import { RegisterComponent } from 'src/core/register/register.component';
import { AccountComponent } from 'src/shared/account/account.component';
import { CartComponent } from 'src/features/cart/cart.component';
import { CheckoutComponent } from 'src/features/checkout/checkout.component';
import { ProductComponent } from 'src/shared/product/product.component';
import { OrderComponent } from 'src/features/order/order.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProductReviewsComponent } from 'src/features/product-reviews/product-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    CartComponent,
    CheckoutComponent,
    ProductComponent,
    OrderComponent,
    ProductReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
