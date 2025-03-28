import { Component, OnInit } from '@angular/core';
import { Bill } from '../model/bill';
import { BillService } from '../services/bill.service';
@Component({
  selector: 'app-unpaid-bill',
  templateUrl: './unpaid-bill.component.html',
  styleUrls: ['./unpaid-bill.component.css']
})
export class UnpaidBillComponent implements OnInit {

  bills : Bill[]=[];
  bill!:Bill;
  constructor(private service: BillService) {}

  ngOnInit(): void {
    this.service.getUnpaidBills().subscribe((x)=>{this.bills=x});
  }

  
}
