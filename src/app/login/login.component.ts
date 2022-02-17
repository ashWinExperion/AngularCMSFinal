import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../shared/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted=false;
  errors='';
  loginUser: any;
  constructor(private formBuilder : FormBuilder,
     private router:Router,
     private authService:AuthService) {}

  ngOnInit():void {
      this.loginForm=this.formBuilder.group({ 
        UserName:['',[Validators.required]],
        Password:['',[Validators.required]] } );
  }

  get formControls() {
      return this.loginForm.controls;
  }

  loginCredentials() {
  
      this.isSubmitted=true;
      
      if(this.loginForm.invalid)
      {
        return;
      }
      if(this.loginForm.valid)
      {
      
        this.authService.loginVerify(this.loginForm.value).subscribe(data=>{
          console.log(data);
          this.loginUser=data;
          if(this.loginUser.RoleId==1)
          {

            localStorage.setItem('USERNAME',this.loginUser.UserName);
            localStorage.setItem('USERROLE',this.loginUser.RoleId);
            sessionStorage.setItem('USERNAME',this.loginUser.UserName);
            sessionStorage.setItem('USERID',this.loginUser.UserId);
            sessionStorage.setItem('JwtTOKEN',this.loginUser.Token);

            this.router.navigateByUrl('/admin');
          }
          else if(this.loginUser.RoleId==2)
          {
            localStorage.setItem('USERNAME',this.loginUser.UserName);
            localStorage.setItem('USERROLE',this.loginUser.RoleId);
            sessionStorage.setItem('USERNAME',this.loginUser.UserName);
            sessionStorage.setItem('USERID',this.loginUser.UserId);
            sessionStorage.setItem('JwtTOKEN',this.loginUser.Token);
            
            this.router.navigateByUrl('/doctor');
          }
          else if(this.loginUser.RoleId==3)
          {
            localStorage.setItem('USERNAME',this.loginUser.UserName);
            localStorage.setItem('USERROLE',this.loginUser.RoleId);
            sessionStorage.setItem('USERNAME',this.loginUser.UserName);
            sessionStorage.setItem('USERID',this.loginUser.UserId);
            sessionStorage.setItem('JwtTOKEN',this.loginUser.Token);
            
            this.router.navigateByUrl('/receptionist');
          }
          else if(this.loginUser.RoleId==4)
          {
            localStorage.setItem('USERNAME',this.loginUser.UserName);
            localStorage.setItem('USERROLE',this.loginUser.RoleId);
            sessionStorage.setItem('USERNAME',this.loginUser.UserName);
            sessionStorage.setItem('USERID',this.loginUser.UserId);
            sessionStorage.setItem('JwtTOKEN',this.loginUser.Token);
            
            this.router.navigateByUrl('/pharmacist');
          }
          else if(this.loginUser.RoleId==5)
          {
            localStorage.setItem('USERNAME',this.loginUser.UserName);
            localStorage.setItem('USERROLE',this.loginUser.RoleId);
            sessionStorage.setItem('USERNAME',this.loginUser.UserName);
            sessionStorage.setItem('USERID',this.loginUser.UserId);
            sessionStorage.setItem('JwtTOKEN',this.loginUser.Token);
            
            this.router.navigateByUrl('/lab-tech');
          }
          else
          {
            alert("Make Sure Your Credentials Are Valid");
            
            this.router.navigateByUrl('/login');
          }
        },
        error=>{
          this.errors="Invalid username or Password"
        });
      }

  }
}
