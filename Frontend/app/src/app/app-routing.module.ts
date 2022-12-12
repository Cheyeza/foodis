import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { CreateComponent } from './create/create.component';
import { GetFoodComponent } from './get-food/get-food.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path : '', component: LandingComponent},
{path : 'register', component: RegisterComponent},
{path : 'login', component: LoginComponent}, 
{path : 'admin/food', component: CreateComponent},
{path : 'GetFood', component: GetFoodComponent},
{path : 'menu', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
