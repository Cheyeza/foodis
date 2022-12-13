import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../interfaces/food';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  items: Food[] = [];
  FormBuilder: any;
  file: any;
  imgUrl!:any;

  FoodForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),

  });

  submitted = false;

  constructor(private food:FoodService,private router: Router,private http:HttpClient, private toast: NgToastService) { }

  ngOnInit(): void {
    this.PostItems();

    this.food.GetItems().subscribe((res:any) => {
      let result = res;
      //console.log(result);
      
    })
  }

  onFileChange(event :any)
{
  if(event.target.files.length>0)
  {
    this.file = event.target.files[0];

  }

}

async PostItems(){       
  const formData = new FormData();    
  formData.append("file",this.file)    
  formData.append("upload_preset","sxnxtyof");     
  this.http.post('https://api.cloudinary.com/v1_1/dhtppljex/image/upload',formData).subscribe(async (res:any)=>{     
    

    this.imgUrl =  await res.url;

    let FoodDetails = {
      name: this.FoodForm.value.name,
      image: res.url,
      price: this.FoodForm.value.price,
      category: this.FoodForm.value.category,
      description: this.FoodForm.value.description,
   


    }

    console.log(this.imgUrl); 
    //console.log('details',FoodDetails);

    this.food.PostItems(FoodDetails).subscribe((next:any) => {
      console.log('Item has been added successfully!');
      this.router.navigate(['/admin/food']);
      this.toast.success({detail:'Success',summary:'Item has been added successfully!', sticky:false,position:'tr', duration:6000})
    
      this.submitted = false;
    });
})  

}

}
