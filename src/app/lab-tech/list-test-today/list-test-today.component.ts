import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabtechService } from 'src/app/shared/labtech.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list-test-today',
  templateUrl: './list-test-today.component.html',
  styleUrls: ['./list-test-today.component.scss']
})
export class ListTestTodayComponent implements OnInit {

  listTestPrescription;
  page=1;
  filterterm="";
  modalRef?: BsModalRef;
  listReportDetails;
  testNameListInModal:string[]=["-------------------------------------"];



  constructor(private labTechService:LabtechService,
    private router:Router,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.labTechService.getPatinetsHavingTEstPrescription().subscribe(
      result=>{
        this.listTestPrescription=result;
        console.log(result);
      }
    )
  }

  consult(appId)
  {
    this.router.navigate(["/doctor/consulting",appId]);
    alert(appId);
  }

  openReport(appointmentId)
  {
    this.router.navigate(["lab-tech/tests-report-list",appointmentId]);
  }
  openModal(template: TemplateRef<any>,appointId) {
    this.testNameListInModal=[""];
    this.labTechService.getReportDetailsByAppointId(appointId).subscribe(result=>{
      console.log(result);
      this.listReportDetails=result;
      for (const iterator of this.listReportDetails) {
        console.log(iterator.testName);
        this.testNameListInModal.push(iterator.testName);
      }
      this.modalRef = this.modalService.show(template);
    })  
  }

}