import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
acno:any=''
result:any
  constructor(private ds:ServiceService) {
    this.acno=ds.currentacno
    this.result=this.ds.getTransaction(this.acno)
    console.log(this.result)
    
   }

  ngOnInit(): void {
  }

  
}
