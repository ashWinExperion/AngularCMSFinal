import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-doctor-reg',
  templateUrl: './doctor-reg.component.html',
  styleUrls: ['./doctor-reg.component.scss'],
})
export class DoctorRegComponent implements OnInit {
  listSpecialization;
  editUserId;
 
  constructor(
    public doctorSrvice: DoctorService,
    private router: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.editUserId = this.router.snapshot.params['Id'];

    if (this.editUserId != 0) {
      this.userService.getUserById(this.editUserId).subscribe((result) => {
        if (result.RoleId == 2) {
          this.doctorSrvice
            .getDoctorDetailsById(this.editUserId)
            .subscribe((result) => {
              // this.doctorSrvice.doctorRegFormData=result;
              var datePipe = new DatePipe('en-UK');
              let formatedDate = datePipe.transform(
                result.UserDob,
                'yyyy-MM-dd'
              );
              result.UserDob = formatedDate;
              this.doctorSrvice.doctorRegFormData = Object.assign({}, result);
              console.log(this.doctorSrvice.doctorRegFormData);
            });
        }
        console.log(this.doctorSrvice.doctorRegFormData);
      });
    }

    this.doctorSrvice.getAllSpecialization().subscribe((result) => {
      this.listSpecialization = result;
      console.log(this.listSpecialization);
    });
  }

  onSubmit(form: NgForm) {
    if (this.editUserId > 0) {
      console.log(form.value);
      this.doctorSrvice.updDoctor(form.value).subscribe((result) => {
        console.log(result);
      });
      console.log(form);
    } else {
      this.doctorSrvice.addDoctor(form.value).subscribe((result) => {
        console.log(result);
      });
      console.log(form);
    }
  }
}
