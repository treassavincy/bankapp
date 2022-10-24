
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   aim='Your perfect banking patner'
   acnt='Enter your account number'
   psw='Enter your password'
     

   acno=''
pswd=''
registerForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],pswd:['',[Validators.required,Validators.pattern('[0-9]+')]]
})
  constructor(private router:Router,private ds:ServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
                        
  login(){
     var acno=this.registerForm.value.acno
     var pswd= this.registerForm.value.pswd


  if(this.registerForm.valid){
    this.ds.login(acno,pswd).subscribe((result:any)=>{
      localStorage.setItem('currentuser',JSON.stringify(result.currentuser))
      localStorage.setItem('currentacno',JSON.stringify(result.currentacno))
      localStorage.setItem('token',JSON.stringify(result.token))
      alert(result.message)
      this.router.navigateByUrl('dashboard')
      },
      result=>{
        alert(result.error.message)
      })
   }
   else{
    alert('Invalid Input')
   }
  }

}

