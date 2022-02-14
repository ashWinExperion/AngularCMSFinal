import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  constructor() { }

  sideBarContent=[
  {Title:"APPOINTMENT",Link:"",Icon:"bi bi-list-nested"},
  {Title:"PATIENTS",Link:"",Icon:"bi bi-people"},
  {Title:"REPORTS",Link:"",Icon:"bi bi-file-earmark-medical"}]

  ngOnInit(): void {
  }
}