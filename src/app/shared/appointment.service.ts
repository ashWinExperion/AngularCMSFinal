import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  nextToken;
  constructor(private httpClient:HttpClient) { }

  getAllApointmentsForAdoctor(id):Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/appointments/doctors/"+id);
  }

  getAppById(id):Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/appointments/details/"+id);
  }

  getAllApointments():Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/appointments");
  }
  


 addApointments(form):Observable<any>{
    return this.httpClient.post("https://localhost:44379/api/appointments",form);
  }

  getNextToken(date){
    this.httpClient.get("https://localhost:44379/api/appointments/token/"+date)
    .toPromise().then(
      response=>{
        this.nextToken=response
        console.log(this.nextToken); 
      }
    )
  }
}
