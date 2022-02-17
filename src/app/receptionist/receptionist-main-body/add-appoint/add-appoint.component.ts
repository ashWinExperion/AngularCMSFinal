import { Component, OnInit } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { DoctorService } from 'src/app/shared/doctor.service';
import { PatientsService } from 'src/app/shared/patients.service';
import{Appointment} from '../../../shared/appointment'

@Component({
  selector: 'app-add-appoint',
  templateUrl: './add-appoint.component.html',
  styleUrls: ['./add-appoint.component.scss']
})
export class AddAppointComponent implements OnInit {
  listDoctorsBasedOnSpecialisation;
  listSpecialization;
  listOfPatients;
  selectPatinetId;
  selectedOption;
  previewOption: any;
  selectedValue?: string;
  editAppointID:Appointment=new Appointment();
  receptionistIdLogedUser;

  constructor(private doctorSrvice:DoctorService,
    public appointmentService:AppointmentService,
    private patientsService :PatientsService) { }

  
  onChange(id){
    this.doctorSrvice.getAllDoctorBasedOnSpId(id).subscribe(result=>{
      this.listDoctorsBasedOnSpecialisation=result;
      console.log(result);
    })
  }

  ngOnInit(): void {
    this.receptionistIdLogedUser=sessionStorage.getItem('USERID');
    
    this.doctorSrvice.getAllSpecialization().subscribe(
      result=>{
        this.listSpecialization=result;
        console.log(this.listSpecialization);
      }
    ) 
    this.patientsService.getAllPatients().subscribe(result=>
      {
        this.listOfPatients=result;
      })
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectPatinetId=event.item.PatientId;
    this.selectedOption = event.item;
    console.log(this.selectPatinetId);

  }

  onPreview(event: TypeaheadMatch): void {
    if (event) {
      this.previewOption = event.item;
    } else {
      this.previewOption = null;
    }
  }

  onDateChange(event){
    console.log(event.target.value);
    this.appointmentService.getNextToken(event.target.value);
  }

 
  
  onSubmit(form){
    delete form.value['PatientName']; 
    this.appointmentService.addApointments(form.value).subscribe(result=>{
      console.log(result);
      
    });
    console.log(form.value);
  }

}
