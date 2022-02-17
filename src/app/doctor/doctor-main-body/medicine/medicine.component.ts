import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { MedicineService } from 'src/app/shared/medicine.service';


@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styles: [`
  .custom-list-group {
    display: flex;
    flex-direction: column;
    width: 300px;
    height:250px !important;
    padding-left: 0;
    margin: 0;
    list-style: none;
  }

  .custom-list-group-item {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    background-color: #fff;
  }

  .custom-list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #007bff;
    border-color: #FF4461;
  }
`]
})
export class MedicineComponent implements OnInit {


  selected?: string;
  medicineList=[{index:0,name:"",doze:0,medId:0}];
  selectMedId=0;
  selectedValue?: string;
  selectedOption: any;
  previewOption?: any;
  constructor(private medicineService:MedicineService,private router:ActivatedRoute) { }

  listMedicine;
  ngOnInit(): void {
    this.medicineService.getAllMedicine().subscribe(result=>{
      this.listMedicine=result;
     
    })
  }

  remove(i,id)
  {
    this.medicineList.splice(i,1);
    alert(id);
    this.medicineService.removeMedFromList(id).subscribe(result=>{

    })
    
  }

  onSubmit(form){

    let medNameSaveB4Delete=form.value['medicineName'];
    delete form.value['medicineName'];
    this.medicineService.addPrescribedMed(form.value,this.router.snapshot.params["appointmentId"]).subscribe(
      result=>{
        console.log(result);
        this.medicineList.push({index:result,name:medNameSaveB4Delete,doze:form.value.Doze,medId:form.value.MedicineId})
      }
    )
    console.log(form.value);
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectMedId=event.item.MedicineId;
    this.selectedOption = event.item;

  }
 
  onPreview(event: TypeaheadMatch): void {
    if (event) {
      this.previewOption = event.item;
    } else {
      this.previewOption = null;
    }
  }

  
}