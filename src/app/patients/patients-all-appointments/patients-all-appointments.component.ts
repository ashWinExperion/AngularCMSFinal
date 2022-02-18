import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { PatientsService } from 'src/app/shared/patients.service';

@Component({
  selector: 'app-patients-all-appointments',
  templateUrl: './patients-all-appointments.component.html',
  styleUrls: ['./patients-all-appointments.component.scss']
})
export class PatientsAllAppointmentsComponent implements OnInit {

  listAppointments;
  page=1;
  filterterm="";
  constructor(private patientsService:PatientsService,
    private router:ActivatedRoute,
    private route:Router) { }

  ngOnInit(): void {
    let patientsId= this.router.snapshot.params["Id"];
    this.patientsService.getAllAppointOfAPatient(patientsId).subscribe(
      result=>{
        this.listAppointments=result;
        console.log(result);
      }
    )
  }


  listAllDetails(appointId)
  {
    this.route.navigate(["/doctor/details",appointId]);
  }

}
