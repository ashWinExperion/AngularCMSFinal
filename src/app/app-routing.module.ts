import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorRegComponent } from './admin/main-body/doctor-reg/doctor-reg.component';
import { MainBodyComponent } from './admin/main-body/main-body.component';
import { StaffListComponent } from './admin/staff-list/staff-list.component';
import { TestAndMedicineComponent } from './admin/test-and-medicine/test-and-medicine.component';
import { AppointmentsDocComponent } from './doctor/doctor-main-body/appointments-doc/appointments-doc.component';
import { ConsultingComponent } from './doctor/doctor-main-body/consulting/consulting.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LabTechComponent } from './lab-tech/lab-tech.component';
import { ListTestTodayComponent } from './lab-tech/list-test-today/list-test-today.component';
import { TestReportsComponent } from './lab-tech/test-reports/test-reports.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './patients/details/details.component';
import { PatientsAllAppointmentsComponent } from './patients/patients-all-appointments/patients-all-appointments.component';
import { PatientsListComponent } from './patients/patients-list/patients-list.component';
import { PatientsComponent } from './patients/patients.component';
import { ListMedicineTodayComponent } from './pharmacist/list-medicine-today/list-medicine-today.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { PatientsAppointComponent } from './receptionist/patients-appoint/patients-appoint.component';
import { AddAppointComponent } from './receptionist/receptionist-main-body/add-appoint/add-appoint.component';
import { AppointReceComponent } from './receptionist/receptionist-main-body/appoint-rece/appoint-rece.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { AddMedicineComponent } from './pharmacist/add-medicine/add-medicine.component';
import { BillComponent } from './receptionist/bill/bill.component';
import { AuthGuard } from './shared/auth.guard';
import { TestListComponent } from './admin/test-and-medicine/test-list/test-list.component';
import { TreatmentlistComponent } from './admin/treatmentlist/treatmentlist.component';
import { AddTreatmentsComponent } from './admin/add-treatments/add-treatments.component';
import { AddPatientsComponent } from './receptionist/add-patients/add-patients.component';
import { HomeComponent } from './home/home.component';
import { UserviewComponent } from './admin/staff-list/userview/userview.component';

const routes: Routes = [
  //-------------------------ADMIN-----------------------------
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard],data:{role:'1'},
children:[
  {path:"staff-reg/:Id",component:MainBodyComponent},
  {path:"staff-list",component:StaffListComponent},
  {path:"add-test/:Id",component:TestAndMedicineComponent},
  {path:"list-test",component:TestListComponent},
  {path:"treatments",component:TreatmentlistComponent},
  {path:"add-treatment/:Id",component:AddTreatmentsComponent},
  {path:"user-view/:Id",component:UserviewComponent}
  
]},


//---------------------------DOCTOR-----------------------------

  {path:"doctor",component:DoctorComponent,canActivate:[AuthGuard],data:{role:'2'},
  children:[{path:"consulting/:appointmentId",component:ConsultingComponent},
            {path:"appointment",component:AppointmentsDocComponent},
            {path:"patients-list",component:PatientsListComponent},
            {path:"details/:Id",component:DetailsComponent},
            {path:"all-appointments/:Id",component:PatientsAllAppointmentsComponent},
            
          ]},

//---------------------------LOGIN------------------------------
{path:"",component:HomeComponent},  
{path:"login",component:LoginComponent},

//---------------------------RECEPIONIST--------------------------
  {path:"receptionist",component:ReceptionistComponent,canActivate:[AuthGuard],data:{role:'3'},
  children:[
    {path:"appointment",component:AppointReceComponent},
   {path:"add-appointment/:Id",component:AddAppointComponent},
   {path:"patients-list",component:PatientsAppointComponent},
   {path:"bill/:Id",component:BillComponent},
   {path:"add-patient/:Id",component:AddPatientsComponent}
]},


//---------------------------PHARMACIST--------------------------
{path:"pharmacist",component:PharmacistComponent,canActivate:[AuthGuard],data:{role:'4'},
children:[
  {path:"patients-for-today",component:ListMedicineTodayComponent},
  {path:"add-med/:Id",component:AddMedicineComponent},
]},

//---------------------------LAB TECH------------------------------
{path:"lab-tech",component:LabTechComponent,canActivate:[AuthGuard],data:{role:'5'},
children:[
  {path:"tests-for-today",component:ListTestTodayComponent},
  {path:"tests-report-list/:Id",component:TestReportsComponent},
]},

//---------------------------PATIENTS------------------------------
{path:"patients",component:PatientsComponent,
children:[] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
