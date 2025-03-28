import { Component, OnInit } from '@angular/core';
import { Bill } from '../model/bill';
import { BillService } from '../services/bill.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bill-list-ui',
  templateUrl: './bill-list-ui.component.html',
  styleUrls: ['./bill-list-ui.component.css']
})
export class BillListUiComponent implements OnInit {

  bills : Bill[]=[];
  bill!:Bill;
  constructor(private billService: BillService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.billService.getBills().subscribe((x)=>{this.bills=x});
  }

  payBill(event: any, index : any) {
    let mon=this.bills[index].meterNo;
    let bd = this.bills[index].billDate;
    let cu = this.bills[index].cunits;
    let pu = this.bills[index].punits;
    let dd = this.bills[index].dueDate;
    let amt = this.bills[index].amount;
    let cou = this.bills[index].consumed;
    let paid:string = "YES";
    
    this.bill = new Bill(mon,bd,cu,pu,cou,amt,dd,paid);
    this.billService.modBill(this.bill)
    .subscribe((data: any)=>{
      console.log(data);
      this.ngOnInit();
    })
  }
}
