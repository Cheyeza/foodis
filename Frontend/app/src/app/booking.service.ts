import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }

  getAllBookings() {
    return this.httpClient.get('http://localhost:3001/bookings');
  }

  getUserBooking() {
    return this.httpClient.get('http://localhost:3001/userBooking');
  }

  PostItems(foodDetails:any) {
    return this.httpClient.post('http://localhost:3001/bookings',foodDetails);
  }
  addBooking(foodDetails:any) {
    return this.httpClient.post('http://localhost:3001/bookings',foodDetails);
  }

  UpdateItems(id:any) {
    return this.httpClient.put('http://localhost:3001/bookings',id);
  }


}
