import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  headers:new HttpHeaders()     //overloaed header
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) {  }
  register(acno:any,username:any,password:any){
    const data={acno,username,password}
   return this.http.post('http://localhost:3000/register',data)
  }

  login(acno:any,pswd:any){
    const data={acno,pswd}
    return this.http.post('http://localhost:3000/login',data)
 
 }

 getToken(){
  const token=JSON.parse(localStorage.getItem('token') || '')
  let headers=new HttpHeaders()
  if(token)
  {
    options.headers=headers.append('token',token)
  }
  return options

 }
 deposit(acnum:any,pswrd:any,amnt:any){
var amount=parseInt(amnt)
const data={acnum,pswrd,amnt}
return this.http.post('http://localhost:3000/deposit',data,this.getToken())

 }
 withdraw(acnum:any,pswrd:any,amnt:any)
 {
  var amount=parseInt(amnt)
  const data={acnum,pswrd,amnt}
return this.http.post('http://localhost:3000/withdraw',data,this.getToken())

 }

 getTransaction(acno:any,){
  const data={acno}
  return this.http.post('http://localhost:3000/transaction',data,this.getToken())
  
 }
deleteAcc(acno:any)
{
  return this.http.delete('http://localhost:3000/deleteacc/'+acno)

}

}