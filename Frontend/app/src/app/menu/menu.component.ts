import { Component, OnInit } from '@angular/core';
import { Food } from '../interfaces/food';
import { FoodService } from '../food.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  results: Food[] = [];

  constructor(private food:FoodService,private toast: NgToastService) { }

  ngOnInit(): void {
    this.food.GetItems().subscribe((res:any) => {
      let result = res;
      //console.log('menu',this.results);
      //this.results = result.filter((ress: { category: any; }) => (ress.category).toLowerCase() === ("KOTA").toLowerCase())
      
      this.results=result;
      console.log(this.results)
      // this.dtTrigger.next(this.results);
      
    })
  }

}
