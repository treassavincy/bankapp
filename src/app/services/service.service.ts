import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user:any=''
  currentacno:any=''
  userDetails:any={
    1000:{acno:1000,username:'amal',password:123,balance:100000,transaction:[]},
    1001:{acno:1001,username:'banu',password:123,balance:10000,transaction:[]},
    1002:{acno:1002,username:'morbis',password:123,balance:4000000,transaction:[]},
    1003:{acno:1003,username:'sachin',password:123,balance:800000,transaction:[]},
   }

  constructor() { }
  register(acno:any,username:any,password:any){
let userDetails=this.userDetails
if(acno in userDetails)
{
  return false
}
else{
  userDetails[acno]={acno,username,password,balance:0}
  console.log(userDetails);
    return true
}
  }

  login(acnum:any,pswd:any){
    
    let userDetails=this.userDetails
    if (acnum in userDetails)
    {
      if(pswd==userDetails[acnum]['password']){
        this.user=userDetails[acnum]['username']
        this.currentacno=acnum
        return true
           }
       else {
               alert('Incorrect Password')
               return false
       }
   }
   else{
     alert('User Doesnt Exist')
     return false
   }
   
 }
 deposit(acnum:any,pswrd:any,amnt:any){
  let userDetails=this.userDetails
var amount=parseInt(amnt)
if (acnum in userDetails)
{
  if(pswrd==userDetails[acnum]['password'])
{
  userDetails[acnum]['balance']+=amount
  userDetails[acnum]['transaction'].push({type:'Credit',amount})
  return userDetails[acnum]['balance']
 
}
else{
  alert("Incorrect Password")
}
}
else{
  alert("User Doesnt Exist")
  return false
}
 }
 withdraw(acnum1:any,pswrd1:any,amnt1:any)
 {
  let userDetails=this.userDetails
  var amount=parseInt(amnt1)
if(acnum1 in userDetails)
{
  if(pswrd1==userDetails[acnum1]['password'])
  {
    if(amount<=userDetails[acnum1]['balance'])
    {
      userDetails[acnum1]['balance']-=amount
      userDetails[acnum1]['transaction'].push({type:'Debit',amount})
      return userDetails[acnum1]['balance']
      
    }
    else{
      alert("Insufficient Balance")
      return false
    }  
  }
  else{
    alert("Incorrect Password")
      }
}
else{
  alert("User Doesnt Exist ")
return false
    }
 }

 getTransaction(acno:any,){
  return this.userDetails[acno]['transaction']

 }

}
