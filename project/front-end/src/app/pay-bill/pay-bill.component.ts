import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillService } from '../services/bill.service';
import { Bill } from '../model/bill';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.css']
})
export class PayBillComponent implements OnInit {

  isConfirmed: boolean=false;
  msg: string="";
  bill!: Bill;
  date1!: Date;
  date2!: Date;
  public myForm!: FormGroup;

  constructor(private router: Router, private service: BillService, private route: ActivatedRoute) { 
    
    this.bill=new Bill(0,new Date(),0,0,0,0,new Date(),'YES');
    //this.createForm();
  }

  ngOnInit(): void {
    console.log("In ngOnInit()")
    this.route.params.subscribe((parameters)=> {
        this.service.getBill(parseInt(parameters['meterNo'])).subscribe((x)=> {
          this.bill=x? x: null;
          let tmpDate1=this.bill.billDate;
          this.date1=this.jsonToDate(new Date(tmpDate1));
          let tmpDate2=this.bill.dueDate;
          this.date2=this.jsonToDate(new Date(tmpDate2));
        });
    });
  }

  toggleConfirmed() {
    if(this.myForm.valid) {
      this.isConfirmed = !this.isConfirmed;
    }
  }

  jsonToDate(date: Date): Date 
  { 
    date.setDate(date.getDate());
    return date;
   }
payBill() {
  this.service.modBill(this.bill).subscribe((x)=>{console.log(x)});
}

}
