import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient:HttpClient) { }

  GetItems() {
    return this.httpClient.get('http://localhost:3001/Items');
  }

  PostItems(foodDetails:any) {
    return this.httpClient.post('http://localhost:3001/Items',foodDetails);
  }
}
