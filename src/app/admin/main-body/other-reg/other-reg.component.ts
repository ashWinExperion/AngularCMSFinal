import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/shared/doctor.service';
import { OtherStaffReg } from 'src/app/shared/other-staff-reg';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-other-reg',
  templateUrl: './other-reg.component.html',
  styleUrls: ['./other-reg.component.scss']
})
export class OtherRegComponent implements OnInit {

  constructor(private userService:UsersService,private router: ActivatedRoute,
    private toastr:ToastrService ) { }
  editUserId;
  listAllRoles;
  userEditObj:OtherStaffReg=new OtherStaffReg();
  ngOnInit(): void {

    this.editUserId = this.router.snapshot.params['Id'];

    if (this.editUserId != 0) {
      this.userService.getUserById(this.editUserId).subscribe((result) => {
        if (result.RoleId != 2) {
          this.userService
            .getUserById(this.editUserId)
            .subscribe((result) => {
              // this.doctorSrvice.doctorRegFormData=result;
              var datePipe = new DatePipe('en-UK');
              let formatedDate = datePipe.transform(
                result.UserDob,
                'yyyy-MM-dd'
              );
              result.UserDob = formatedDate;
              this.userEditObj=result;

              console.log(this.userEditObj);
            });
        }
        
      });
    }


    this.userService.getAllRole().subscribe(result=>{
      this.listAllRoles=result;
      console.log(this.listAllRoles);
    })
  }


  onSubmit(form:NgForm)
  {

    console.log(form.value);
    if (this.editUserId == 0) {
    this.userService.addUsers(form.value).subscribe(result=>{
      this.toastr.success("Staff Registered...!!!","Success");
      console.log(result);
    })
  }
  else
  {
    this.userService.updUsers(form.value).subscribe(result=>{
      this.toastr.success("Staff Updated ...!!!","Success");
      console.log(result);
    })
  }
  }
}
