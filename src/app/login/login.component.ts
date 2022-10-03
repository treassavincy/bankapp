
import { Component, OnInit } from '@angular/core';
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
  //  userDetails:any={
  //   1000:{acno:1000,username:'amal',password:123,balance:100000},
  //   1001:{acno:1001,username:'banu',password:123,balance:10000},
  //   1002:{acno:1000,username:'morbis',password:123,balance:4000000},
  //   1003:{acno:1000,username:'sachin',password:123,balance:800000},
  //  }


  constructor(private router:Router,private ds:ServiceService) { }

  ngOnInit(): void {
  }
                        
  login(){
     var acnum=this.acno
     var pswd= this.pswd
  const result=this.ds.login(acnum,pswd)
    if(result){
      alert("Login Successful")
      this.router.navigateByUrl('dashboard')
    }
  }

}

