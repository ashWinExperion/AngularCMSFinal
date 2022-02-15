import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../shared/general.service';

@Component({
  selector: 'app-lab-tech',
  templateUrl: './lab-tech.component.html',
  styleUrls: ['./lab-tech.component.scss']
})
export class LabTechComponent implements OnInit {

  constructor(public generalService:GeneralService) { }
  
  sideBarContent=[{Title:"PATIENTS",Link:"staff-list",Icon:"bi bi-view-list"},
  {Title:"REPORTS",Link:"",Icon:"bi bi-file-earmark-minus"},
  {Title:"TESTS",Link:"",Icon:"bi bi-check2-square"}]
  ngOnInit(): void {
  }

}
