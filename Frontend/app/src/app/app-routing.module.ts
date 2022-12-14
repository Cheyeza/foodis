import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { CreateComponent } from './create/create.component';
import { GetFoodComponent } from './get-food/get-food.component';
import { MenuComponent } from './menu/menu.component';
import { FriesComponent } from './fries/fries.component';
import { DrinksComponent } from './drinks/drinks.component';
import { PiesComponent } from './pies/pies.component';
import { KotaComponent } from './kota/kota.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './booking/booking.component';
import { EditItemComponent } from './edit-item/edit-item.component';

const routes: Routes = [
  {path : '', component: LandingComponent},
{path : 'register', component: RegisterComponent},
{path : 'login', component: LoginComponent}, 
{path : 'admin/food', component: CreateComponent},
{path : 'GetFood', component: GetFoodComponent},
{path : 'menu', component: MenuComponent},
{path : 'kota', component: KotaComponent},
{path : 'pies', component: PiesComponent},
{path : 'drinks', component: DrinksComponent},
{path : 'fries', component: FriesComponent},
{path : 'order', component: OrderComponent},
{path : 'profile', component: ProfileComponent},
{path : 'booking', component: BookingComponent},
{path : 'admin/editItem', component: EditItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
