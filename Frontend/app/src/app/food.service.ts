import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  REST_API: string = 'http://localhost:3001';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

  constructor(private httpClient:HttpClient) { }

  GetItems() {
    return this.httpClient.get('http://localhost:3001/Items');
  }

  PostItems(foodDetails:any) {
    return this.httpClient.post('http://localhost:3001/Items',foodDetails);
  }

  updateItem(id:number,carDetails:any): Observable<any> {
    let API_URL = this.REST_API + '/items/id'+ id;
    return this.httpClient.put(API_URL, carDetails).pipe(
      catchError(this.errorHandler)
    )
  }

  deleteItem(id:number): Observable<any> {
    let API_URL = this.REST_API + '/items/id' + id;
    return this.httpClient.delete(API_URL).pipe(
      catchError(this.errorHandler)
    )
  }
}
