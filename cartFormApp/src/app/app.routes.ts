import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductComponent } from '../components/product/product.component';
import { CartComponent } from '../components/cart/cart.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"product", component:ProductComponent},
    {path:"cart",component:CartComponent}
];
