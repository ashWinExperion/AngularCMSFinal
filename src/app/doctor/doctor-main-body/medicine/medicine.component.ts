import { Component, OnInit } from '@angular/core';
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
  constructor(private medicineService:MedicineService) { }

  listMedicine;
  ngOnInit(): void {
    this.medicineService.getAllMedicine().subscribe(result=>{
      this.listMedicine=result;
     
    })
  }

  onSubmit(form){

    this.medicineList.push({index:this.medicineList.length,name:form.value.medicineName,doze:form.value.doze,medId:form.value.selectedMedId})
    console.log(form);
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