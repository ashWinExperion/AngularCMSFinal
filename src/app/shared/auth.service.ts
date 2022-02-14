import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  
  public loginVerify(user:User)
  {
    return this.httpClient.post("https://localhost:44379/api/login/token",user);
  }
  
  public logOut()
  {
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('USERROLE');
    sessionStorage.removeItem('USERNAME');

  }
}
