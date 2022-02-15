import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{OtherStaffReg} from './other-staff-reg'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  addUsers(user:OtherStaffReg):Observable<any>{
    alert("");
    return this.httpClient.post("https://localhost:44379/api/users",user);
  }

  getAllUsers():Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/users/raw");
  }
}
