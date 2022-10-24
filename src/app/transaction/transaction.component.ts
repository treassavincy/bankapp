import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
acno:any=''
transaction:any
  constructor(private ds:ServiceService) {
    this.acno=JSON.parse(localStorage.getItem('currentacno') || '')
this.ds.getTransaction(this.acno).subscribe((result:any)=>{
this.transaction=result.transaction
  },
  result=>{
    alert(result.error.message)
  })
    
   }

  ngOnInit(): void {
  }

  
}
