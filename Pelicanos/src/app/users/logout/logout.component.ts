import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.logoutUser();
  }


logoutUser():void{
  this.userService.logoutUser();
  this.router.navigate(["/home"]);
}


}
