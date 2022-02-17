import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabtechService } from 'src/app/shared/labtech.service';

@Component({
  selector: 'app-test-reports',
  templateUrl: './test-reports.component.html',
  styleUrls: ['./test-reports.component.scss']
})
export class TestReportsComponent implements OnInit {

  listTestPrescription;
  listReportDetails;
  page=1;
  constructor(private labTechService:LabtechService,
    private route:ActivatedRoute) { }


    ngOnInit(): void {
     let  appointId=this.route.snapshot.params["Id"];
      this.labTechService.getReportDetailsByAppointId(appointId).subscribe(result=>{
        console.log(result);
        this.listReportDetails=result;
      
      })  
    }

    addTestReport(TestReportId,form){
      alert(TestReportId);
      console.log(form);
      this.labTechService.addToTestReport({TestReportId:TestReportId,TestValue:form.value.testVal}).subscribe(result=>{
      })
    }

}
