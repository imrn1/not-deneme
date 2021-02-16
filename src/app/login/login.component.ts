import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=this.fb.group({
    // username:this.fb.control(null,[Validators.required]),
    mail:this.fb.control(null,[Validators.email]),
    password: this.fb.control(null,[Validators.required])
  })

  constructor(private fb:FormBuilder,private auth:AngularFireAuth,private router:Router) { }

  login(){
    this.auth.signInWithEmailAndPassword(this.loginForm.value.mail,this.loginForm.value.password).then(()=>{
      this.router.navigate(['notes'])
    })


  }
  signup(){
    this.auth.createUserWithEmailAndPassword(this.loginForm.value.mail,this.loginForm.value.password).then(()=>{
      this.login()
    })
  }


  ngOnInit(): void {
  }

}
