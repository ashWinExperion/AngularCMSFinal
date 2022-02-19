import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LabtechService } from 'src/app/shared/labtech.service';
import { PatientsService } from 'src/app/shared/patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

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
    this.router.navigate(["/doctor/all-appointments",appId]);
    alert(appId);
  }

}