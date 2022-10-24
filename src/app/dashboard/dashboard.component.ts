import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentuser=''
  
  acnum=''
  pswrd=''
  amnt=''



  acnumber:any
  sdetails:any
  registerForm=this.fb.group({acnum:['',[Validators.required,Validators.pattern('[0-9]+')]],pswrd:['',[Validators.required,Validators.pattern('[0-9]+')]],amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]})  
  register1Form=this.fb.group({acnum:['',[Validators.required,Validators.pattern('[0-9]+')]],pswrd:['',[Validators.required,Validators.pattern('[0-9]+')]],amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]})  
  constructor(private ds:ServiceService,private fb:FormBuilder,private router:Router) { 
    if(localStorage.getItem('currentuser')){
      this.currentuser=JSON.parse(localStorage.getItem('currentuser') || '')
    }

    this.sdetails=new Date()
  }

  ngOnInit(): void {
    if(!localStorage.getItem('token'))
    {
      alert('login first')
      this.router.navigateByUrl('')
    }
  }
  deposit()
  {
    var acnum=this.registerForm.value.acnum
    var pswrd=this.registerForm.value.pswrd
    var amnt=this.registerForm.value.amnt

if(this.registerForm.valid){
  this.ds.deposit(acnum,pswrd,amnt).subscribe((result:any)=>{
    alert(result.message)
    },
    result=>{
      alert(result.error.message)
    }
    )
}
else{
  alert('Invalid Input')
 }
}

  withdraw()
  {
    var acnum=this.register1Form.value.acnum
    var pswrd=this.register1Form.value.pswrd
    var amnt=this.register1Form.value.amnt

if(this.register1Form.valid)
{
  this.ds.withdraw(acnum,pswrd,amnt).subscribe((result:any)=>{
    alert(result.message)
    },
    result=>{
      alert(result.error.message)
    }
    )
}
else{
  alert('Invalid Input')
 }
  }

logout(){
  localStorage.removeItem('user')
  localStorage.removeItem('currentacno')
  localStorage.removeItem('token')
  this.router.navigateByUrl('')
}

deleteconfirm()
{
  this.acnumber=JSON.parse(localStorage.getItem('currentacno') || '')
}
oncancel(){
  this.acnumber=''
}
onDelete(event:any){
// alert(event)
this.ds.deleteAcc(event).subscribe((result:any)=>{
  alert(result.message)
  this.logout()
},
result=>{
  alert(result.error.message)
}
)
}
}
