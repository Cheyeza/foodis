import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgToastService} from 'ng-angular-popup';
import jwt_decode from 'jwt-decode';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  UserLoginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  decoded: any;

  submitted = false;

  constructor(private userServive:UserService, private router: Router, private toast: NgToastService, public fb: FormBuilder) { }

  myForm() {
    this.UserLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [ Validators.required ]]
    });
  }

  ngOnInit(): void {
  }

  get formValidation(): { [key: string]: AbstractControl } {
    return this.UserLoginForm.controls;
  }

  UserLogin()
  {
    this.submitted = true;
   
      let logingDetails = {
        email: this.UserLoginForm.value.email,
        password: this.UserLoginForm.value.password
      }
  
      this.userServive.UserLogin(logingDetails).subscribe(res => {
          this.decoded = jwt_decode(res.token); 

          this.toast.success({detail:'Success',summary:'Successfully login!', sticky:false,position:'tr', duration:6000})
          this.router.navigate(['/']);

          sessionStorage.setItem('loggedInToken', res.token);
          sessionStorage.setItem('loggedEmail', this.decoded.email);

          this.submitted = false;
        }, (err) => {
          this.toast.warning({detail:'Warning',summary:'Fillup the form or Email already exist', sticky:false,position:'tr', duration:6000})
      });
      
   
  } openSuccess() {
    this.toast.success({detail:'Success!',summary: 'Account has been successfully created',position:'tr', duration:3000});
    
  }
  openWarning() {
    this.toast.warning({detail:'Warning!',summary: 'Ypur Email or Password is Invalid',position:'tr', duration:3000});

   
  };

}
