import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/shared/doctor.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-other-reg',
  templateUrl: './other-reg.component.html',
  styleUrls: ['./other-reg.component.scss']
})
export class OtherRegComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm)
  {
    console.log(form.value);
    this.userService.addUsers(form.value).subscribe(result=>{
      console.log(result);
    })
    console.log(form);
  }
}
