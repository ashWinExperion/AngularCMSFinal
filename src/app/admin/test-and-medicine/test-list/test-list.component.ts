import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/shared/test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

  listTest;
  filterterm="";
  page=1;
  constructor(private testService:TestService,private route:Router) { }

  ngOnInit(): void {
    this.testService.getAllTests().subscribe(
      result=>{
        this.listTest=result;
        console.log(result);
      }
    )
  }

  disable(item)
  {
    this.testService.disableTest(item).subscribe(result=>{
      console.log("Delete");
      this.ngOnInit();
    })
  }

  addEdit(item){
    this.route.navigate(["/admin/add-test",item]);
  }
}
