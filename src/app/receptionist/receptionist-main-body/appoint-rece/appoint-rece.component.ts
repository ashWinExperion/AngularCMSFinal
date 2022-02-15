import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-appoint-rece',
  templateUrl: './appoint-rece.component.html',
  styleUrls: ['./appoint-rece.component.scss']
})
export class AppointReceComponent implements OnInit {

  listAppointments;
  page=1;
  filterterm="";
  constructor(private appointmentService:AppointmentService,
    private router:Router) { }

  ngOnInit(): void {
    this.appointmentService.getAllApointments().subscribe(
      result=>{
        this.listAppointments=result;
        console.log(result);
      }
    )
  }

  consult(appId)
  {
    this.router.navigate(["/doctor/consulting",appId]);
    alert(appId);
  }

}
