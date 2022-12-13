import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import{UserDetails} from '../user-details';
import { Food } from '../interfaces/food';
import { UserService } from '../user.service';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  users:UserDetails[]= [];
  menu:Food[]= [];
  bid!:number;
  userb: Booking[] = [];

  // bForm: FormGroup = new FormGroup({

  // });

  BookingForm: FormGroup = new FormGroup({
    option: new FormControl(''),
    booking_status: new FormControl(''),
    user_id: new FormControl(''),
    food_id: new FormControl('')
  });
  public name = localStorage.getItem('name');
  public loggedEmail = localStorage.getItem('loggedEmail');

  submitted = false;

  constructor(private booking:BookingService,public formbuilder: FormBuilder, private router: Router,private userService:UserService,private foodService:FoodService) { }

  myForm() {
    this.BookingForm = this.formbuilder.group({
      option: ['', [Validators.required ]],
      booking_status: ['', [Validators.required ]],
      user_id: [''],
      food_id: ['']
    });
  }

  bookings: Booking[]=[];
  

  ngOnInit(): void {
    this.myForm();
    // this.PostItems()
    this.addBooking()

    
  }

  get formValidation(): { [key: string]: AbstractControl } {
    return this.BookingForm.controls;
  }

  addBooking(){
    let bookingDetails = {
      option: this.BookingForm.value.option,
      booking_status: this.BookingForm.value.booking_status,
      user_id: this.BookingForm.value.user_id,
      booking_id: this.BookingForm.value.booking_id,
   
    }
    // let bDetails={
    //   option: this.userb.
    // }

    this.booking.addBooking(bookingDetails).subscribe((res:any)=>{
      let result = res;
      console.log('booking details',result);
      

    })
  }

  

}
