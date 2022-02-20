import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientsService } from 'src/app/shared/patients.service';
import {Patients} from '../../shared/patients';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.scss']
})
export class AddPatientsComponent implements OnInit {
  editPatientId;
  PatinetObj:Patients =new Patients() ;
  constructor(private patientService:PatientsService,
    private router:ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.editPatientId = this.router.snapshot.params['Id'];

    if (this.editPatientId != 0) {
      this.patientService.getpatientById(this.editPatientId).subscribe((result) => {
        var datePipe = new DatePipe("en-UK");
        let formatedDate=datePipe.transform(result.Date,'yyyy-MM-dd');
        result.Date=formatedDate;
       this.PatinetObj=result;
      });
    }
  }
  onSubmit(addPatient)
  {
    if (this.editPatientId == 0) {
    console.log(addPatient);
    this.patientService.addPatinet(addPatient).subscribe(result=>{

    })
  }
    else {
      this.patientService.updPatinet(addPatient).subscribe((result) => {
        this.toastrService.success('Medicien Registered...!!!', 'Success');
        //this.route.navigateByUrl("/admin/staff-list");
        console.log(result);
      });
      console.log(addPatient);
    }
  }
}
