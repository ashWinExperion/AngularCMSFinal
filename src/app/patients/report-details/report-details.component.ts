import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/shared/medicine.service';
import { TestService } from 'src/app/shared/test.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

 
  patientReport;
  constructor(private router:ActivatedRoute,
    private testService:TestService) { }

  ngOnInit(): void {
 
    this.testService.getAllTestReport(this.router.snapshot.params["Id"]).subscribe(result=>{
      this.patientReport=result;
      console.log(result);
    })
  }

}
