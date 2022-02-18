import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {

  constructor(private httpClient:HttpClient) { }

  getMedcineListByAppointId(id):Observable<any>{
    alert(id);
    return this.httpClient.get("https://localhost:44379/api/medicineprescription/appointments/"+id);

  }

  getPatientWithMedicineListForTheDay():Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/medicineprescription/today");

  }
  
}

