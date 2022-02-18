import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../shared/general.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(public generalService:GeneralService) { }
  
  sideBarContent=[{Title:"PATIENTS",Link:"",Icon:"bi bi-view-list"},
  {Title:"REPORTS",Link:"",Icon:"bi bi-file-earmark-minus"},
  {Title:"TESTS",Link:"",Icon:"bi bi-check2-square"}]
  ngOnInit(): void {
  }

}
