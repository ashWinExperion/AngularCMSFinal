import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MedicineService } from 'src/app/shared/medicine.service';
import {Medicine} from '../../shared/medicine'

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {
  medicineObj:Medicine=new Medicine();
  editMedId;
  constructor(
    private medicineService: MedicineService,
    private router: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.editMedId = this.router.snapshot.params['Id'];

    if (this.editMedId != 0) {
      this.medicineService.getMedById(this.editMedId).subscribe((result) => {
       this.medicineObj=result;
      });
    }
  }

  onSubmit(medForm) {
    if (this.editMedId > 0) {
      console.log(medForm.value);
      this.medicineService.updMedicine(medForm.value).subscribe((result) => {
        this.toastrService.success('Medicine Updated...!!!', 'Success');
        // this.route.navigateByUrl("/admin/staff-list");
        console.log(result);
      });
      console.log(medForm);
    } else {
      this.medicineObj.MedicineId=0;
      this.medicineService.addNewMed(medForm.value).subscribe((result) => {
        this.toastrService.success('Medicien Registered...!!!', 'Success');
        //this.route.navigateByUrl("/admin/staff-list");
        console.log(result);
      });
      console.log(medForm);
    }
    console.log(medForm.value);
    this.medicineService.addNewMed(medForm.value).subscribe((result) => {});
  }
}
