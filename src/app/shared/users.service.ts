import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{OtherStaffReg} from './other-staff-reg'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  
  getAllRole():Observable<any>{
   
    return this.httpClient.get("https://localhost:44379/api/roles/raw");
  }

  addUsers(user:OtherStaffReg):Observable<any>{
  
    return this.httpClient.post("https://localhost:44379/api/users",user);
  }

  updUsers(user:OtherStaffReg):Observable<any>{
  
    return this.httpClient.put("https://localhost:44379/api/users",user);
  }


  getAllUsers():Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/users/raw");
  }

  getUserById(id):Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/users/"+id);
  }
}
