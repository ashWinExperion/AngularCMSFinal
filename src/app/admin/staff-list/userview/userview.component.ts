import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {
  UserId;
  userObj;
  pic="";
  role=["","Admin","Doctor","Receptionist","Pharmacist","Lab-Tech"]
  constructor(private router:ActivatedRoute,
    private userService:UsersService) { }

  ngOnInit(): void {
    this.UserId = this.router.snapshot.params['Id'];

    if (this.UserId != 0) {
      this.userService.getUserById(this.UserId).subscribe(result=>{
        console.log(result);
        this.userObj=result;
        this.pic=(this.userObj.Gender=="Male")?"../../../../assets/pics/male2.jpg":"../../../../assets/pics/female2.jpg";
      });
    }

  }

}
