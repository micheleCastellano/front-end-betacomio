import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/shared/account/account.component';
import { CartComponent } from 'src/features/cart/cart.component';
import { CheckoutComponent } from 'src/features/checkout/checkout.component';
import { HomeComponent } from 'src/core/home/home.component';
import { LoginComponent } from 'src/core/login/login.component';
import { OrderComponent } from 'src/features/order/order.component';
import { ProductComponent } from 'src/shared/product/product.component';
import { RegisterComponent } from 'src/core/register/register.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "product/:id", component: ProductComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "account", component: AccountComponent},
  {path: "order", component: OrderComponent},
  {path: "cart", component: CartComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
