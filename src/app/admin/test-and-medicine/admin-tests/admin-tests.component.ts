import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TestService } from 'src/app/shared/test.service';
import { Test } from "../../../shared/test";

@Component({
  selector: 'app-admin-tests',
  templateUrl: './admin-tests.component.html',
  styleUrls: ['./admin-tests.component.scss']
})
export class AdminTestsComponent implements OnInit {
  testObj:Test=new Test();
  editTestId;
  constructor(
    private testService: TestService,
    private router: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.editTestId = this.router.snapshot.params['Id'];

    if (this.editTestId != 0) {
      this.testService.getTestById(this.editTestId).subscribe((result) => {
       this.testObj=result;
      });
    }
  }

  onSubmit(TestForm) {
    if (this.editTestId > 0) {
      console.log(TestForm.value);
      this.testService.updtest(TestForm.value).subscribe((result) => {
        this.toastrService.success('test Updated...!!!', 'Success');
        // this.route.navigateByUrl("/admin/staff-list");
        console.log(result);
      });
      console.log(TestForm);
    } else {
      this.testObj.TestId=0;
      this.testService.addNewTest(TestForm.value).subscribe((result) => {
        this.toastrService.success('Testicien Registered...!!!', 'Success');
        //this.route.navigateByUrl("/admin/staff-list");
        console.log(result);
      });
      console.log(TestForm);
    }

  }
}
