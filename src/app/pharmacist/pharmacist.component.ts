import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../shared/general.service';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.scss']
})
export class PharmacistComponent implements OnInit {

  constructor(public generalService:GeneralService) { }
  
  sideBarContent=[{Title:"PATIENTS",Link:"patients-for-today",Icon:"bi bi-people"},
  {Title:"HISTORY",Link:"",Icon:"bi bi-journals"},
  {Title:"MEDICINES",Link:"",Icon:"bi bi-collection-fill"}]
  ngOnInit(): void {
  }

}
