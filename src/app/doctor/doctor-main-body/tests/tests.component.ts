import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { TestService } from 'src/app/shared/test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  selected?: string;
  testList=[{index:0,name:"",TestId:0}];
  selectTestId=0;
  selectedValue?: string;
  selectedOption: any;
  previewOption?: any;
  constructor(private testService:TestService,
    private router:ActivatedRoute) { }

  listtest;
  ngOnInit(): void {
    this.testService.getAllTests().subscribe(result=>{
      this.listtest=result;
     
    })
  }

  onSubmit(form){
    let appointId=this.router.snapshot.params["appointmentId"];
    console.log(form.value);
    this.testService.addToTestReportList(form.value,appointId).subscribe(result=>{
      console.log(result);
      this.testList.push({index:result,name:form.value.testName,TestId:form.value.selectedTestId})
    })
    console.log(form.value);
  }

  remove(i,removeTestId)
  {
    this.testList.splice(i,1);
    this.testService.removeTest(removeTestId).subscribe(result=>{

    })
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectTestId=event.item.TestId;
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