import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private httpClient:HttpClient) { }

  getAllPatients():Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/patients/raw");
  }

  getAllAppointOfAPatient(id): Observable<any> {
    return this.httpClient.get("https://localhost:44379/api/appointments/patients/"+id);
  }


  getBillByAppId(id): Observable<any> {
    return this.httpClient.get("https://localhost:44379/api/patients/bill/"+id);
  }

}
