import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  today=new Date();
  dateIsGreater=false;
  constructor(
    public doctorSrvice: DoctorService,
    private router: ActivatedRoute,
    private userService: UsersService,
    private toastrService:ToastrService,
    private route:Router
  ) {}

  OnDateChange(DateOfBirth)
  {
    let today=new Date();
    let compareDay=new Date(DateOfBirth);
    if (today<=compareDay) {
      this.dateIsGreater=true;
    }
    else
    {
      this.dateIsGreater=false;
    }
    
  }
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


  onChangeFn(event){
    console.log(event);
  }

  onSubmit(form: NgForm) {
    if (this.editUserId > 0) {
      console.log(form.value);
      this.doctorSrvice.updDoctor(form.value).subscribe((result) => {
        this.toastrService.success("Doctor Updated...!!!","Success");
        this.route.navigateByUrl("/admin/staff-list");
        console.log(result);
      });
      console.log(form);
    } else {
      this.doctorSrvice.addDoctor(form.value).subscribe((result) => {
        this.toastrService.success("Doctor Registered...!!!","Success");
        this.route.navigateByUrl("/admin/staff-list");
        console.log(result);
      });
      console.log(form);
    }
  }
}
