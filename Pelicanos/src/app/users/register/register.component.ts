import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private UsrService: UserService, private router: Router) { }

  ngOnInit() {
  }
/*
  saveNewUser(){
    this.UsrService.saveNewUser(this.player).subscribe(item =>{
      alert("El jugador a sido Actualizado correctamente");
    });

    this.router.navigate(["/player/list"]);
  }
*/
}
