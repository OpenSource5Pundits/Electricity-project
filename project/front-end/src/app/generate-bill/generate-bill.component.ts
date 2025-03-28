import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillService } from '../services/bill.service';
import { Bill } from '../model/bill';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
})
export class GenerateBillComponent implements OnInit {

  isConfirmed: boolean=false;
  msg: string="";
  //customer!: Customer;
  //customer2!: Customer;
  bill!: Bill;
  date1!: Date;
  date2!: Date;
  //bill2!: Bill;
  public myForm!: FormGroup;

  constructor(private router: Router, private service: BillService, private route: ActivatedRoute) { 
    
    this.bill=new Bill(0,new Date(),0,0,0,0,new Date(),'NO');
    //this.customer = new Customer(0, "", "","", "",this.bill);
    this.createForm();
  }
  ngOnInit(): void
  {
    console.log("In ngOnInit()")
    this.route.params.subscribe((parameters)=>
    {
        this.service.getBill(parseInt(parameters['meterNo'])).subscribe((x)=>
        {
          this.bill=x? x: null;
          let tmpDate1=this.bill.billDate;
          this.date1=this.jsonToDate(new Date(tmpDate1));
          let tmpDate2=this.bill.dueDate;
          this.date2=this.jsonToDate(new Date(tmpDate2));
        });
    });
  }


  createForm() {
    this.myForm = new FormGroup({
      billDate : new FormControl(new Date(0), [Validators.required]),
      cunits : new FormControl(null, [Validators.required, Validators.min(200)]),
      punits : new FormControl(null, [Validators.required, Validators.max(3000)]),
      dueDate: new FormControl(new Date(0), [Validators.required]),
    })
  }

  mySubmit() {
    this.bill.billDate=this.billDate?.value;
    this.bill.dueDate=this.dueDate?.value;
    this.msg = `Bill Date is ${this.bill.billDate} Current units is ${this.bill.cunits} Previous units is ${this.bill.punits} Due date is ${this.bill.dueDate}`;
    let consumed = this.bill.cunits - this.bill.punits;
    let amount: number;
    if(consumed < 200) {
      amount = 4 * consumed;
    } else if(consumed < 400) {
      amount = 6 * consumed;
    } else {
      amount = 8 * consumed;
    }
    this.bill.consumed = consumed;
    this.bill.amount = amount;
    let mno = this.bill.meterNo;
    let paid = this.bill.paid;
    //var punits = this.bill.punits;
    console.log(this.bill);
    let pu = this.bill.punits;
    let cu = this.bill.cunits;
    this.bill = new Bill(mno,this.billDate?.value,cu,pu,consumed,amount,this.dueDate?.value,paid);
    this.bill.cunits = cu;
    this.bill.punits = pu;
    this.service.modBill(this.bill).subscribe((x)=>{console.log(x)});
    //this.service.generateBill(this.bill).subscribe((x)=>{console.log(x)});//you can't give blank inside subscribe, so do a dummy job
  }
  myReset()
  {
    this.toggleConfirmed()
  }
  toggleConfirmed() {
    if(this.myForm.valid) {
      this.isConfirmed = !this.isConfirmed;
    }
  }
  
  get billDate() {
    return this.myForm.get("billDate");
  }

  get cunits() {
    return this.myForm.get("cunits?.value");
  }

  get punits() {
    return this.myForm.get("punits");
  }

  get dueDate() {
    return this.myForm.get("dueDate");
  }
  jsonToDate(date: Date): Date 
  { 
    date.setDate(date.getDate());
    return date;
   }
}


