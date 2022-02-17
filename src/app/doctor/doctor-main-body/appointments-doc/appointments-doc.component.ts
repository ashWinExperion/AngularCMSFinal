import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-appointments-doc',
  templateUrl: './appointments-doc.component.html',
  styleUrls: ['./appointments-doc.component.scss']
})
export class AppointmentsDocComponent implements OnInit {

  listAppointments;
  page=1;
  filterterm="";
  constructor(private appointmentService:AppointmentService,
    private router:Router) { }

  ngOnInit(): void {
    let DoctorUserId=sessionStorage.getItem('USERID');
    console.log("-->"+ DoctorUserId);
    this.appointmentService.getAllApointmentsForAdoctor(DoctorUserId).subscribe(
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
