import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PatientsService } from 'src/app/shared/patients.service';

@Component({
  selector: 'app-patients-appoint',
  templateUrl: './patients-appoint.component.html',
  styleUrls: ['./patients-appoint.component.scss']
})
export class PatientsAppointComponent implements OnInit {

  listPatients;
  page=1;
  filterterm="";
  modalRef?: BsModalRef;
  listReportDetails;
  testNameListInModal:string[]=["-------------------------------------"];



  constructor(private patientsService:PatientsService,
    private router:Router,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.patientsService.getAllPatients().subscribe(
      result=>{
        this.listPatients=result;
        console.log(result);
      }
    )
  }

  consult(appId)
  {
    this.router.navigate(["/",appId]);
    alert(appId);
  }

}