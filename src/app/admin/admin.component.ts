import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../shared/general.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public generalService:GeneralService) { }
  sideBarContent=[{Title:"STAFFS",Link:"staff-list",Icon:"bi bi-person-plus"},
  {Title:"TEST | MEDICINE",Link:"add-med-test",Icon:"bi bi-activity"},
  {Title:"TREATMENTS",Link:"",Icon:"bi bi-bandaid"}]
  ngOnInit(): void {
  }

}
