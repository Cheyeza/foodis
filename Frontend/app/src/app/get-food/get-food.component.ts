import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Food } from '../interfaces/food';
import { FoodService } from '../food.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-get-food',
  templateUrl: './get-food.component.html',
  styleUrls: ['./get-food.component.scss']
})
export class GetFoodComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  results: Food[] = [];

  constructor(private food:FoodService,private toast: NgToastService) { }

  ngOnInit(): void {
    this.food.GetItems().subscribe((res:any) => {
      this.results = res;
      //console.log('menu',this.results);

      this.dtTrigger.next(this.results);
      
    })

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu : [5, 10, 25],
      processing: true
     };
  }

}
