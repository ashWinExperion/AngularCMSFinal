import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/shared/doctor.service';
import { Specialization } from 'src/app/shared/specialization';


@Component({
  selector: 'app-add-treatments',
  templateUrl: './add-treatments.component.html',
  styleUrls: ['./add-treatments.component.scss']
})
export class AddTreatmentsComponent implements OnInit {
  SpecializationObj:Specialization=new Specialization();
  editSpecializationId;
  constructor(
    private doctorService: DoctorService,
    private router: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.editSpecializationId = this.router.snapshot.params['Id'];

    if (this.editSpecializationId != 0) {
      this.doctorService.getAllSpecializationById(this.editSpecializationId).subscribe((result) => {
       this.SpecializationObj=result;
      });
    }
  }

  onSubmit(SpecializationForm) {
    if (this.editSpecializationId > 0) {
      console.log(SpecializationForm.value);
      this.doctorService.updSpecialization(SpecializationForm.value).subscribe((result) => {
        this.toastrService.success('Specialization Updated...!!!', 'Success');
        // this.route.navigateByUrl("/admin/staff-list");
        console.log(result);
      });
      console.log(SpecializationForm);
    } else {
      console.log(SpecializationForm.value);
      this.SpecializationObj.SpecializationId=0;
      this.doctorService.addNewSpecialization(SpecializationForm.value).subscribe((result) => {
        this.toastrService.success('Specializationicien Registered...!!!', 'Success');
        //this.route.navigateByUrl("/admin/staff-list");
        console.log(result);
      });
      console.log(SpecializationForm);
    }

  }
}
