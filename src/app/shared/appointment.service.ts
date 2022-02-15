import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  getAllApointmentsForAdoctor(id):Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/appointments/doctors/"+id);
  }


  getAllApointments():Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/appointments");
  }
}
