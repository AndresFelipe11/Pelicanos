import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../users/users.service';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UrlInjectionGuard implements CanActivate {
  
  constructor(private userService: UserService, private route: Router){

  }
  
  
  canActivate() {
    if(isNullOrUndefined(this.userService.getUserInformation())){
      this.route.navigate(["/user/login"]);
      return false;
    }
    else{
      return true;
    }
   
  }
  
}
