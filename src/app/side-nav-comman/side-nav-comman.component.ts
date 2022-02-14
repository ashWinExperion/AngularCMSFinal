import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from '../shared/general.service';

@Component({
  selector: 'app-side-nav-comman',
  templateUrl: './side-nav-comman.component.html',
  styleUrls: ['./side-nav-comman.component.scss']
})
export class SideNavCommanComponent implements OnInit {

  constructor(public generalService: GeneralService) { }
 @Input() sideBar;
  ngOnInit(): void {
    console.log(this.sideBar);
  }

}
