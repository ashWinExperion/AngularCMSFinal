import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  constructor(private appointmentService:AppointmentService) { }

  sideBarContent=[
  {Title:"APPOINTMENT",Link:"/doctor/appointment",Icon:"bi bi-list-nested"},
  {Title:"PATIENTS",Link:"",Icon:"bi bi-people"},
  {Title:"REPORTS",Link:"",Icon:"bi bi-file-earmark-medical"}]

  ngOnInit(): void {
   
  }
}