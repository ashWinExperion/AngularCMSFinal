import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  constructor(private appointmentService:AppointmentService,private toasterServie:ToastrService) { }

  sideBarContent=[
  {Title:"APPOINTMENT",Link:"/doctor/appointment",Icon:"bi bi-list-nested"},
  {Title:"PATIENTS",Link:"",Icon:"bi bi-people"},
  {Title:"REPORTS",Link:"",Icon:"bi bi-file-earmark-medical"}]

  ngOnInit(): void {
   this.toasterServie.success("Doctor Loged In","Successfully...!!!");
  }
}