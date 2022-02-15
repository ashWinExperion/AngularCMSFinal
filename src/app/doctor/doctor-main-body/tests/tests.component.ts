import { Component, OnInit } from '@angular/core';
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
  constructor(private testService:TestService) { }

  listtest;
  ngOnInit(): void {
    this.testService.getAllTests().subscribe(result=>{
      this.listtest=result;
     
    })
  }

  onSubmit(form){
    this.testList.push({index:this.testList.length,name:form.value.testName,TestId:form.value.selectedTestId})
    console.log(this.testList);
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