import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service';
import { TestService } from 'src/app/shared/test.service';

@Component({
  selector: 'app-treatmentlist',
  templateUrl: './treatmentlist.component.html',
  styleUrls: ['./treatmentlist.component.scss']
})
export class TreatmentlistComponent implements OnInit {

  listService;
  filterterm="";
  page=1;
  constructor(private doctorService:DoctorService,private route:Router) { }

  ngOnInit(): void {
    this.doctorService.getAllSpecialization().subscribe(
      result=>{
        this.listService=result;
        console.log(result);
      }
    )
  }


  addEdit(item){
    this.route.navigate(["/admin/add-test",item]);
  }
}
