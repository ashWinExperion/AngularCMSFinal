import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AdminComponent } from './admin/admin.component';
import { MainBodyComponent } from './admin/main-body/main-body.component';
import { TopNavComponent } from './admin/top-nav/top-nav.component';
import { SideNavCommanComponent } from './side-nav-comman/side-nav-comman.component';
import { DoctorComponent } from './doctor/doctor.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { OtherRegComponent } from './admin/main-body/other-reg/other-reg.component';
import { DoctorRegComponent } from './admin/main-body/doctor-reg/doctor-reg.component';
import { DoctorMainBodyComponent } from './doctor/doctor-main-body/doctor-main-body.component';
import { LoginComponent } from './login/login.component';
import {GeneralService} from './shared/general.service';
import{ MedicineComponent } from './doctor/doctor-main-body/medicine/medicine.component'
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import{MedicineService} from './shared/medicine.service';
import { ConsultingComponent } from './doctor/doctor-main-body/consulting/consulting.component';
import { AppointmentsDocComponent } from './doctor/doctor-main-body/appointments-doc/appointments-doc.component'
import {AppointmentService} from './shared/appointment.service';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { ReceptionistMainBodyComponent } from './receptionist/receptionist-main-body/receptionist-main-body.component';
import { AppointReceComponent } from './receptionist/receptionist-main-body/appoint-rece/appoint-rece.component';
import { AddAppointComponent } from './receptionist/receptionist-main-body/add-appoint/add-appoint.component';
import{DoctorService} from './shared/doctor.service';
import{UsersService} from './shared/users.service';
import { StaffListComponent } from './admin/staff-list/staff-list.component';
import { TestsComponent } from './doctor/doctor-main-body/tests/tests.component';
import { TestService } from './shared/test.service';
import { LabTechComponent } from './lab-tech/lab-tech.component';
import { ListTestTodayComponent } from './lab-tech/list-test-today/list-test-today.component';
import {LabtechService} from './shared/labtech.service';
import { TestReportsComponent } from './lab-tech/test-reports/test-reports.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { ListMedicineTodayComponent } from './pharmacist/list-medicine-today/list-medicine-today.component';
import {PharmacistService} from './shared/pharmacist.service';
import { TestAndMedicineComponent } from './admin/test-and-medicine/test-and-medicine.component';
import { AdminTestsComponent } from './admin/test-and-medicine/admin-tests/admin-tests.component';
import { AdminMedicineComponent } from './admin/test-and-medicine/admin-medicine/admin-medicine.component';
import{PatientsService} from './shared/patients.service';
import { GeneralNotesComponent } from './doctor/doctor-main-body/general-notes/general-notes.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsListComponent } from './patients/patients-list/patients-list.component';
import { ToastrModule } from 'ngx-toastr';
import { PatientsAllAppointmentsComponent } from './patients/patients-all-appointments/patients-all-appointments.component';
import { DetailsComponent } from './patients/details/details.component';
import { GeneralDetailsComponent } from './patients/general-details/general-details.component';
import { ReportDetailsComponent } from './patients/report-details/report-details.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import {NgxPrintModule} from 'ngx-print';
import { PatientsAppointComponent } from './receptionist/patients-appoint/patients-appoint.component';
import { AddMedicineComponent } from './pharmacist/add-medicine/add-medicine.component';
import { BillComponent } from './receptionist/bill/bill.component';
import { TestListComponent } from './admin/test-and-medicine/test-list/test-list.component';
import { TreatmentlistComponent } from './admin/treatmentlist/treatmentlist.component';
import { AddTreatmentsComponent } from './admin/add-treatments/add-treatments.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainBodyComponent,
    TopNavComponent,
    SideNavCommanComponent,
    DoctorComponent,
    OtherRegComponent,
    DoctorRegComponent,
    DoctorMainBodyComponent,
    LoginComponent,
    MedicineComponent,
    ConsultingComponent,
    AppointmentsDocComponent,
    ReceptionistComponent,
    ReceptionistMainBodyComponent,
    AppointReceComponent,
    AddAppointComponent,
    StaffListComponent,
    TestsComponent,
    LabTechComponent,
    ListTestTodayComponent,
    TestReportsComponent,
    PharmacistComponent,
    ListMedicineTodayComponent,
    TestAndMedicineComponent,
    AdminTestsComponent,
    AdminMedicineComponent,
    GeneralNotesComponent,
    PatientsComponent,
    PatientsListComponent,
    PatientsAllAppointmentsComponent,
    DetailsComponent,
    GeneralDetailsComponent,
    ReportDetailsComponent,
    PatientsAppointComponent,
    AddMedicineComponent,
    BillComponent,
    TestListComponent,
    TreatmentlistComponent,
    AddTreatmentsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ToastrModule.forRoot(),
    AlertModule.forRoot(),
    NgxPrintModule
  ],
  providers: [GeneralService,MedicineService
    ,AppointmentService,DoctorService,UsersService,TestService,LabtechService,PharmacistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
