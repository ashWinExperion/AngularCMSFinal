import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PatientsService } from 'src/app/shared/patients.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  listBillDetails: any;


  constructor(private patientsService:PatientsService,
    private router:ActivatedRoute,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    let Id = this.router.snapshot.params["Id"];
    this.patientsService.getBillByAppId(Id).subscribe(
      result=>{
        this.listBillDetails=result;
        console.log(result);
      }
    )
  }



}