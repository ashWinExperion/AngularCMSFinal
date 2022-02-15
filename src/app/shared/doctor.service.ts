import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{DoctorReg} from './doctor-reg'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient:HttpClient) { }

  addDoctor(user:DoctorReg):Observable<any>{
    alert("");
    return this.httpClient.post("https://localhost:44379/api/users/doctor",user);
  }
}
