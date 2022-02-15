import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-list-test-today',
  templateUrl: './list-test-today.component.html',
  styleUrls: ['./list-test-today.component.scss']
})
export class ListTestTodayComponent implements OnInit {

  listAppointments;
  constructor(private appointmentService:AppointmentService,
    private router:Router) { }

  ngOnInit(): void {
    this.appointmentService.getAllApointmentsForAdoctor(6).subscribe(
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
