import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { UserService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class FormLoginGuard implements CanActivate {
  
  constructor(private userService: UserService, private route: Router){

  }
  
  
  canActivate() {
    if(!isNullOrUndefined(this.userService.getUserInformation())){
      this.route.navigate(["/home"]);
      return false;
    }
    else{
      return true;
    }
   
  }
  
}
