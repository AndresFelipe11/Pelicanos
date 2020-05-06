import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/users.service';
import { isNullOrUndefined } from 'util';
import { UserModel } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  subscription:Subscription;

  constructor(private userService: UserService) { }
  
  userInfo: UserModel;
  userLogged: boolean=false;
  CompleteName: string='';


/*
  veryfyUserSession(){
    this.subscription= this.userService.getUserInfo().subscribe(user=>{
      this.userInfo=user;
      this.userLogged=user.islogged;
      this.CompleteName=user.
    })
    }
    */
  ngOnInit() {
    this.showMenu();
  }



  showMenu():void{
    let userInfo = this.userService.getUserInformation();
    if(isNullOrUndefined(userInfo)){
      this.userLogged=false

    }
    else{
      this.userLogged= true;
     this.CompleteName=userInfo.realm;
    }
  }

}
