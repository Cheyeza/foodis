import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Food } from '../interfaces/food';
import { FoodService } from '../food.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  results: Food[] = [];
  file: any;
  fid!:any;
  sub!:any;
  public foodis:any;
  foodid!:any;

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

  constructor(private food:FoodService,private toast: NgToastService, private http:HttpClient,private router:Router, private fb: FormBuilder,private route: ActivatedRoute) { 

    this.food.GetItems().subscribe((res:any) => {
      // this.bookings = res;
      let result = res;
      this.fid = result.filter((ress:any) => String(ress.id) === String(this.foodid))
// console.log(result.id);

      this.foodis = result;

      console.log(this.foodis);

      console.log('data',result);

        this.EditItemForm.setValue({ 
          id: this.foodis[0].id, 
          name: this.foodis[0].name,
          image: this.foodis[0].image,
          price: this.foodis[0].price,
          category: this.foodis[0].category,
          description: this.foodis[0].description
         
          }); 
 
    });
  }

  myForm() {
    this.EditItemForm = this.fb.group({
      name: ['', [Validators.required ]],
      image: ['', [Validators.required ]],
      price: ['', [Validators.required ]],
      category: new FormControl(''),
      description: ['', [Validators.required ]],
    });
  }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      return this.fid = params['id'];
    });

    console.log('id',this.fid)
    this.myForm();

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
        category: this.EditItemForm.value.category,
        description: this.EditItemForm.value.description,
      
      }

      console.log(this.imgUrl); 
      console.log(itemDetails);


    this.food.updateItem(Number(this.fid), itemDetails).subscribe((next:any) => {
     
      this.router.navigate(['admin/editItem']);
      localStorage.setItem('id', this.fid);
      this.router.navigate(['GetFood']);
      this.toast.success({detail:'Success',summary:'Successfully Updated!', sticky:false,position:'tr', duration:6000})
      this.submitted = false;
    });

      
   })
  }

  get formValidation(): { [key: string]: AbstractControl } {
    return this.EditItemForm.controls;
  }

}
