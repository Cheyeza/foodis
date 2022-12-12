import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../interfaces/food';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  items: Food[] = [];
  FormBuilder: any;
  file: any;

  CarForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
    category: new FormControl(''),

    status: new FormControl(''),

  });
  constructor(private food:FoodService) { }

  ngOnInit(): void {
    this.food.GetItems().subscribe((res:any) => {
      let result = res;
      console.log(result);
      
    })
  }

}
