import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

usern=''
acn=''
pswrd=''
  constructor(private ds:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  register()
  {
    var usern=this.usern
    var acn=this.acn
    var pswrd=this.pswrd
  //  let userDetails=this.ds.userDetails
//its logic is in services.ts
    const result=this.ds.register(acn,usern,pswrd)// stored in result because it returns either true or false 
    if(result)// no need to give == true
    {
alert("Registered Successfully")
this.router.navigateByUrl('')
    }
   else{
alert("User already exists")
   }
  }

}
