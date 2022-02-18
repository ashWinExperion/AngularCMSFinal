import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.scss']
})
export class GeneralDetailsComponent implements OnInit {

  patientDetails;
  constructor(private router:ActivatedRoute,
    private medicineService:MedicineService) { }

  ngOnInit(): void {
 
    this.medicineService.getAllMedPrescribed(this.router.snapshot.params["Id"]).subscribe(result=>{
      this.patientDetails=result;
      console.log(result);
    })
  }

}
