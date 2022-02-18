import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GeneralService } from '../shared/general.service';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.scss']
})
export class PharmacistComponent implements OnInit {

  constructor(public generalService:GeneralService,private toasterServie:ToastrService) { }
  
  sideBarContent=[{Title:"PATIENTS",Link:"patients-for-today",Icon:"bi bi-people"},
  {Title:"HISTORY",Link:"",Icon:"bi bi-journals"},
  {Title:"MEDICINES",Link:"",Icon:"bi bi-collection-fill"}]
  ngOnInit(): void {
    this.toasterServie.success("Receptionist Loged In","Successfully.!!!");
  }

}
