import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/shared/general.service';
import { LabtechService } from 'src/app/shared/labtech.service';

@Component({
  selector: 'app-test-reports',
  templateUrl: './test-reports.component.html',
  styleUrls: ['./test-reports.component.scss'],
})
export class TestReportsComponent implements OnInit {
  listTestPrescription;
  listReportDetails;
  page = 1;
  risk = false;
  normal = false;
  appointId;
  constructor(
    private labTechService: LabtechService,
    private route: ActivatedRoute,
    private generalService:GeneralService
  ) {}

  ngOnInit(): void {
    this.appointId = this.route.snapshot.params['Id'];
    this.labTechService
      .getReportDetailsByAppointId(this.appointId)
      .subscribe((result) => {
        console.log(result);
        this.listReportDetails = result;
      });
  }

  sendMail(){
    let mailHtmlString="";
    console.log(this.listReportDetails);
    let patinetName=this.listReportDetails[0].firstName;
    
    
    mailHtmlString=mailHtmlString+`<br>Dear ${this.listReportDetails[0].firstName},<br>`;

    mailHtmlString=mailHtmlString+`<h5>${patinetName}'s TEST REPORT</h5>
    <table style="border:1px solid black;">
      <tr style="border:1px solid black;">
        <th  style="border:1px solid black;">TEST ID</th>
        <th  style="border:1px solid black;"></th>
        <th  style="border:1px solid black;">TEST NAME</th>
        <th  style="border:1px solid black;">NORMAL RANGE</th>
        <th  style="border:1px solid black;">MEASURED</th>
      </tr>`;

    let i =0;
    for (const iterator of this.listReportDetails) {
      i++;
      mailHtmlString=mailHtmlString+`
        <tr style="border:1px solid black;">
          <td  style="border:1px solid black;">${i}<td>
          <td  style="border:1px solid black;">${iterator.testName}</td>
          <td  style="border:1px solid black;">${iterator.testStartVal} - ${iterator.testEndVal} ( ${iterator.unit})</td>
          <td  style="border:1px solid black;"> ${iterator.testValueMeasured}</td>
        </tr>`
      
    
    }

    mailHtmlString=mailHtmlString+`</table>`


    this.generalService.sendMail(mailHtmlString).subscribe(result=>{

    })
    console.log(mailHtmlString);
  }

  onTestValChange(event, start, end) {
    console.log(event.target.value);
    console.log(start);
    console.log(end);
  }

  addTestReport(TestReportId, form) {
    alert(TestReportId);
    console.log(form);
    this.labTechService
      .addToTestReport({
        TestReportId: TestReportId,
        TestValue: form.value.testVal,
      })
      .subscribe((result) => {});
  }
}
