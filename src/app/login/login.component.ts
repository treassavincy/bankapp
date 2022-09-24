import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"
  acnt="Account Number"
  pss="Password"
acno=" "
pass=" "
userDetails:any={
  1000:{acno:1000,uname:'amal',pass:123,bal:100000},
  1001:{acno:1001,uname:'binu',pass:123,bal:200000},
  1002:{acno:1002,uname:'joyce',pass:123,bal:50000},
  1003:{acno:1003,uname:'noel',pass:123,bal:350000},
  1004:{acno:1004,uname:'sania',pass:123,bal: 400000}
}

  constructor() { }

  ngOnInit(): void {
  }

  // login()
  // {
  //   var acnum=this.acno
  //   var pas=this.pass
  //   let userDetails=this.userDetails
  //   if(acnum in userDetails)
  //   {
  //     if(pas==userDetails[acnum]['pass'])
  //     {
  //       alert("Login Successful")
  //     }
  //     else{
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else{
  //     alert("Account number doesn't exist")
  //   }
    
  // }
  login(a:any,b:any)
  {
    var acnum=a.value
    var pas=b.value
    let userDetails=this.userDetails
    if(acnum in userDetails)
    {
      if(pas==userDetails[acnum]['pass'])
      {
        alert("Login Successful")
      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
      alert("Account number doesn't exist")
    }
    
  }
}
