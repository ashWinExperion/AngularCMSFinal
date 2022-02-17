import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient:HttpClient) { }

  getAllTests():Observable<any>{
    return this.httpClient.get("https://localhost:44379/api/tests/raw");
  }

  addToTestReportList(form,id):Observable<any>
  {

    return this.httpClient.post("https://localhost:44379/api/TestReport/"+id,form);
  }

  removeTest(id):Observable<any>
  {
    return this.httpClient.delete("https://localhost:44379/api/TestReport/"+id);
  }


}

