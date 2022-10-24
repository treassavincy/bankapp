import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
//this is model for registration form
registerForm=this.fb.group({
  usern:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],acn:['',[Validators.required,Validators.pattern('[0-9]+')]],pswrd:['',[Validators.required,Validators.pattern('[0-9@#$]+')]]
})

  constructor(private ds:ServiceService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register()
  {
    var usern=this.registerForm.value.usern
    var acn=this.registerForm.value.acn
    var pswrd=this.registerForm.value.pswrd
  //  let userDetails=this.ds.userDetails
//its logic is in services.ts
   if(this.registerForm.valid){
    this.ds.register(acn,usern,pswrd).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message)
      }
      )// stored in result because it returns either true or false 
  
   }
   else{
    alert('Invalid Input')
   }
  }


}
