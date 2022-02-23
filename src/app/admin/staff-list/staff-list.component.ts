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
  role=["","Admin","Doctor","Receptionist","Pharmacist","Lab-Tech"]
  filterterm="";
  userEditObj;
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

  onDel(id)
  {
    console.log(id);
    this.usersService.disableUser(id).subscribe(result=>{
      console.log("Deleted");
      this.ngOnInit();
    });
  }

  onView(id){
    this.router.navigate(["admin/user-view",id])
  }

  onEdit(id){

    this.router.navigate(["admin/staff-reg",id])
  }

  consult(appId)
  {
    this.router.navigate(["/admin/",appId]);
    alert(appId);
  }

}
