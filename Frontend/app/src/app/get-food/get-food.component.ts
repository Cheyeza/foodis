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
  file: any;
  fid!:any;
  sub!:any;

  public foodis:any;
  
  imgUrl: any;

  EditItemForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
    
      });

      submitted = false;

  constructor(private food:FoodService,private toast: NgToastService, private http:HttpClient,private router:Router) {

    
   }

  ngOnInit(): void {
    this.food.GetItems().subscribe((res:any) => {
      this.results = res;
      //console.log('menu',this.results);

      this.dtTrigger.next(this.results);

      if(this.foodis!= undefined)
      {
        this.EditItemForm.setValue({
          firstname: this.foodis[0].firstname,
          lastname: this.foodis[0].lastname,
          email: this.foodis[0].email,
          phone: this.foodis[0].phone
        })
      }
      
    })

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu : [5, 10, 25],
      processing: true
     };
  }

  onFileChange(event :any)
  {
      if(event.target.files.length>0)
      {
        this.file = event.target.files[0];

      }

  }

  async updateCar(){       
    const formData = new FormData();    
    formData.append("file",this.file)    
    formData.append("upload_preset","sxnxtyof");     
    this.http.post('https://api.cloudinary.com/v1_1/dhtppljex/image/upload',formData).subscribe(async (res:any)=>{     
      

      this.imgUrl =  await res.url;

      let itemDetails = {
        id: this.EditItemForm.value.id,
        name: this.EditItemForm.value.name,
        image: res.url,
        price: this.EditItemForm.value.price,
        description: this.EditItemForm.value.description,
      
      }

      console.log(this.imgUrl); 
      console.log(itemDetails);


    this.food.updateItem(Number(this.fid), itemDetails).subscribe((next:any) => {
      this.router.navigate(['admin/editItem']);
      this.toast.success({detail:'Success',summary:'Successfully Updated!', sticky:false,position:'tr', duration:6000})
      this.submitted = false;
    });

      
   })
  }

  deleteCar(id: any){
    this.food.deleteItem(id).subscribe((res:any) => {
      this.foodis=res;
      this.toast.success({detail:'success',summary:'Successfully Deleted!', sticky:false,position:'tr', duration:6000})
      console.log(id);
    })
  }

}
