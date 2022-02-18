import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.scss']
})
export class ReceptionistComponent implements OnInit {

  constructor(private appointmentService:AppointmentService,private toasterServie:ToastrService) { }

  sideBarContent=[
  {Title:"PATIENTS",Link:"/receptionist/patients-list",Icon:"bi bi-person-plus"},
  {Title:"APPOINTMENT",Link:"/receptionist/appointment",Icon:"bi bi-calendar-check-fill"},
  {Title:"BILL",Link:"",Icon:"bi bi-receipt-cutoff"}]

  ngOnInit(): void {
   this.toasterServie.success("Receptionist Loged In","Successfully...!!");
  }
}
