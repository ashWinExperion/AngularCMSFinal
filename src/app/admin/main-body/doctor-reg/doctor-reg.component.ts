import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-doctor-reg',
  templateUrl: './doctor-reg.component.html',
  styleUrls: ['./doctor-reg.component.scss']
})
export class DoctorRegComponent implements OnInit {

  constructor(private doctorSrvice:DoctorService) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm)
  {
    this.doctorSrvice.addDoctor(form.value).subscribe(result=>{
      console.log(result);
    })
    console.log(form);
  }
  
}
