import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }

  getAllMedicine():Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/medicines/raw");
  }

  addPrescribedMed(form,appId):Observable<any>{
    console.log(form);
    return this.httpClient.post("https://localhost:44379/api/MedicineList/"+appId,form);
  }

  removeMedFromList(id){
    return this.httpClient.delete("https://localhost:44379/api/MedicineList/"+id);
  }


  getAllMedPrescribed(id){
    return this.httpClient.get("https://localhost:44379/api/medicineprescription/appointments/"+id);
  }
  
}
