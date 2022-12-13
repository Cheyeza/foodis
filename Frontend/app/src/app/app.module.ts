import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {NgToastModule} from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateComponent } from './create/create.component';
import { GetFoodComponent } from './get-food/get-food.component';
import {DataTablesModule} from 'angular-datatables';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { KotaComponent } from './kota/kota.component';
import { FriesComponent } from './fries/fries.component';
import { PiesComponent } from './pies/pies.component';
import { DrinksComponent } from './drinks/drinks.component';
import { BookingComponent } from './booking/booking.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LandingComponent,
    NavbarComponent,
    CreateComponent,
    GetFoodComponent,
    MenuComponent,
    OrderComponent,
    KotaComponent,
    FriesComponent,
    PiesComponent,
    DrinksComponent,
    BookingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgToastModule,
    BrowserAnimationsModule,
    DataTablesModule,
    CommonModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
