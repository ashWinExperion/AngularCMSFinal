import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private authService:AuthService,
    private router:Router) { }

  logOut(){
  this.authService.logOut();
  this.router.navigateByUrl('login');
}

}
