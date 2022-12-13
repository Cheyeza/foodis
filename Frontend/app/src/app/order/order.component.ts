import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  results: any[] = [];

  constructor(private bookingService:BookingService) { }

  ngOnInit(): void {
    this.bookingService.getUserBooking().subscribe((res:any) => {
      let result = res;
      //console.log('menu',this.results);
      //this.results = result.filter((ress: { category: any; }) => (ress.category).toLowerCase() === ("KOTA").toLowerCase())
      
      this.results=result;
      console.log(this.results)
      // this.dtTrigger.next(this.results);
      
    })
  }

}
