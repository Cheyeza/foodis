import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  AddUserForm: FormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPass: new FormControl()
  });

  public isVisible: boolean = false;

  submitted = false;

  constructor(private userServive:UserService, private router: Router, private toast: NgToastService, public fb: FormBuilder) {
     this.myForm()
    }


  myForm() {
    this.AddUserForm = this.fb.group({
      firstname: ['', [ Validators.required ]],
      lastname: ['', [ Validators.required ]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void {
  }

  get formValidation(): { [key: string]: AbstractControl } {
    return this.AddUserForm.controls;
  }

  AddUser()
  {
    
      this.submitted = true;

      if(this.AddUserForm.value.confirmPass === this.AddUserForm.value.password && this.AddUserForm.value.firstname != '')
      {
        let userDetails = {
          firstname:this.AddUserForm.value.firstname,
          lastname: this.AddUserForm.value.lastname,
          email: this.AddUserForm.value.email,
          password: this.AddUserForm.value.password
        }
    
        console.log(userDetails);
    
        this.userServive.AddUser(userDetails).subscribe((next:any) => {
            console.log('Add successfully!');
            this.openSuccess();
            this.router.navigate(['/login']);

            sessionStorage.setItem('token', JSON.stringify(userDetails)); 
 
            this.submitted = false;

            this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
          }, (err) => {
            this.toast.warning({detail:'Warning',summary:'Fillup the form or Email already exist', sticky:false,position:'tr', duration:6000})
        });
      }
      else
      {
        this.openWarning();
      }
   
  }
  openSuccess() {
    this.toast.success({detail:'Success!',summary: 'Account has been successfully created',position:'tr', duration:3000});
    
  }
  openWarning() {
    this.toast.warning({detail:'Warning!',summary: 'Passwords do not match',position:'tr', duration:3000});

   
  }


}
