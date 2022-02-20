import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private authService:AuthService,
    private router:Router,
    private httpClient:HttpClient) { }

  logOut(){
  this.authService.logOut();
  this.router.navigateByUrl('login');
}


sendMail(mailHtmlString)
{

  return this.httpClient.post("https://localhost:44379/api/sendmail/stringhtml",{ "msgString":mailHtmlString});
}
}
