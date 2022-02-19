import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{DoctorReg} from './doctor-reg'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctorRegFormData:DoctorReg=new DoctorReg;
  constructor(private httpClient:HttpClient) { }

  getDoctorDetailsById(id):Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/users/doctors/"+id);
  }

  addDoctor(user:DoctorReg):Observable<any>{

    return this.httpClient.post("https://localhost:44379/api/users/doctor",user);
  }

  updDoctor(user:DoctorReg):Observable<any>{

    return this.httpClient.put("https://localhost:44379/api/users/doctors",user);
  }


  updSpecialization(sp):Observable<any>{

    return this.httpClient.put("https://localhost:44379/api/specialization",sp);
  }


  addNewSpecialization(sp):Observable<any>{
    console.log("---");
    
    console.log(sp);
    
    return this.httpClient.post("https://localhost:44379/api/specialization",sp);
  }


  getAllSpecialization():Observable<any>{
 
    return this.httpClient.get("https://localhost:44379/api/specialization/raw");
  }

  getAllSpecializationById(id):Observable<any>{
 
    return this.httpClient.get("https://localhost:44379/api/specialization/"+id);
  }


  getAllDoctorBasedOnSpId(id):Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/doctors/specialisation/"+id);
  }


  addGeneralNotes(generalNote):Observable<any>{
    return this.httpClient.post("https://localhost:44379/api/GeneralNotes",generalNote);
  }


}
