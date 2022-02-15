import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorRegComponent } from './admin/main-body/doctor-reg/doctor-reg.component';
import { MainBodyComponent } from './admin/main-body/main-body.component';
import { StaffListComponent } from './admin/staff-list/staff-list.component';
import { AppointmentsDocComponent } from './doctor/doctor-main-body/appointments-doc/appointments-doc.component';
import { ConsultingComponent } from './doctor/doctor-main-body/consulting/consulting.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LabTechComponent } from './lab-tech/lab-tech.component';
import { ListTestTodayComponent } from './lab-tech/list-test-today/list-test-today.component';
import { LoginComponent } from './login/login.component';
import { AddAppointComponent } from './receptionist/receptionist-main-body/add-appoint/add-appoint.component';
import { AppointReceComponent } from './receptionist/receptionist-main-body/appoint-rece/appoint-rece.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';

const routes: Routes = [
  //-------------------------ADMIN-----------------------------
  {path:"admin",component:AdminComponent,
children:[
  {path:"staff-reg",component:MainBodyComponent},
  {path:"staff-list",component:StaffListComponent}
]},

//---------------------------DOCTOR-----------------------------

  {path:"doctor",component:DoctorComponent,
  children:[{path:"consulting/:appointmentId",component:ConsultingComponent},
            {path:"appointment",component:AppointmentsDocComponent}
          ]},

//---------------------------LOGIN------------------------------
  {path:"login",component:LoginComponent},

//---------------------------RECEPIONIST--------------------------
  {path:"receptionist",component:ReceptionistComponent,
  children:[
    {path:"appointment",component:AppointReceComponent},
   {path:"add-appointment",component:AddAppointComponent}
]},

//---------------------------LAB TECH------------------------------
{path:"lab-tech",component:LabTechComponent,
children:[
  {path:"tests-for-today",component:ListTestTodayComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
