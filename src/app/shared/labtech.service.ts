import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabtechService {

  constructor(private httpClient:HttpClient) { }

  getPatinetsHavingTEstPrescription():Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/testprescription/todaysTests");
  }

  getReportDetailsByAppointId(id):Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/testreport/appointments/"+id);

  }
}

