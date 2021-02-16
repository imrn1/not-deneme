import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(public auth:AngularFireAuth,private router:Router) { }
  logOut(){
    this.auth.signOut().then(()=>{
      this.router.navigate(['login'])
    })
  }

  addNote(){
    this.router.navigate(['addNote'])
  }
}
