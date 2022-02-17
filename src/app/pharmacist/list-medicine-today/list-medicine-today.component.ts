import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LabtechService } from 'src/app/shared/labtech.service';
import { PharmacistService } from 'src/app/shared/pharmacist.service';

@Component({
  selector: 'app-list-medicine-today',
  templateUrl: './list-medicine-today.component.html',
  styleUrls: ['./list-medicine-today.component.scss']
})
export class ListMedicineTodayComponent implements OnInit {
    listMedicinePrescription;
    page=1;
    filterterm="";
    modalRef?: BsModalRef;
    listMedListDetails;
    medicineNameListInModal:string[]=["-------------------------------------"];
  
  
  
    constructor(private pharmacistService:PharmacistService,
      private router:Router,
      private modalService: BsModalService) { }
  
    ngOnInit(): void {
      this.pharmacistService.getPatientWithMedicineListForTheDay().subscribe(
        result=>{
          this.listMedicinePrescription=result;
          console.log(result);
        }
      )
    }
  
    consult(appId)
    {
      this.router.navigate(["/doctor/consulting",appId]);
      alert(appId);
    }
  
    openList(appointmentId)
    {
      this.router.navigate(["lab-tech/tests-report-list",appointmentId]);
    }
    openModal(template: TemplateRef<any>,appointId) {
      this.medicineNameListInModal=[""];
      this.pharmacistService.getMedcineListByAppointId(appointId).subscribe(result=>{
        console.log(result);
        this.listMedListDetails=result;
      
        this.medicineNameListInModal=this.listMedListDetails.medName;
       console.log("=="+ this.medicineNameListInModal);
      
        this.modalRef = this.modalService.show(template);
      })  
    }
  
  }