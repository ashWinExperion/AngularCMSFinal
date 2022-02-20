import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private httpClient:HttpClient) { }

  addPatinet(form):Observable<any>
  {
    alert("");
    return this.httpClient.post("https://localhost:44379/api/patients",form);
  }
  getAllPatients():Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/patients/raw");
  }

  getAllAppointOfAPatient(id): Observable<any> {
    return this.httpClient.get("https://localhost:44379/api/appointments/patients/"+id);
  }

  getpatientById(id):Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/patients/"+id);
  }

  getBillByAppId(id): Observable<any> {
    return this.httpClient.get("https://localhost:44379/api/patients/bill/"+id);
  }

  updPatinet(form):Observable<any>
  {
    alert("");
    return this.httpClient.put("https://localhost:44379/api/patients",form);
  }

}
