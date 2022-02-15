import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  listUsers;
  page=1;
  role=["Admin","Doctor","Receptionist","Pharmacist","Lab-Tech"]
  filterterm="";
  constructor(private usersService:UsersService,
    private router:Router) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(
      result=>{
        this.listUsers=result;
        console.log(result);
      }
    )
  }

  consult(appId)
  {
    this.router.navigate(["/admin/",appId]);
    alert(appId);
  }

}
