import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Customer } from '../model/customer';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { BillService } from '../services/bill.service';
import { Bill } from '../model/bill';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-ui',
  templateUrl: './customer-ui.component.html',
  styleUrls: ['./customer-ui.component.css']
})
export class CustomerUiComponent implements OnInit {

  isConfirmed: boolean=false;
  msg: string="";
  customer!: Customer;
  customer2!: Customer;
  bill!: Bill;
  bill2!: Bill;
  public myForm!: FormGroup;
  ngOnInit(): void {

  }

  constructor(private router: Router,private service1: CustomerService, private service2: BillService, private route: ActivatedRoute) { 
    
    this.bill=new Bill(0,new Date(),0,0,0,0,new Date(),'NO');
    this.customer = new Customer(0, "", "","", "",this.bill);
    this.createForm();
  }

  createForm() {
    this.myForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      address : new FormControl(null, [Validators.required]),
      phone : new FormControl(null, [Validators.required]),
      emailId: new FormControl(null, [Validators.required]),
    })
  }

  mySubmit() {
    this.msg = `Customer name is ${this.customer.custName}  Address is ${this.customer.address}  EmailId is ${this.customer.emailId}`;
    console.log(this.customer.bill);
    this.service1.addCustomer(this.customer).subscribe((x)=>{console.log(x)});//you can't give blank inside subscribe, so do a dummy job
  }

  toggleConfirmed() {
    if(this.myForm.valid) {
      this.isConfirmed = !this.isConfirmed;
    }
  }
  
  get name() {
    return this.myForm.get("name");
  }

  get address() {
    return this.myForm.get("address");
  }

  get phone() {
    return this.myForm.get("phone");
  }

  get emailId() {
    return this.myForm.get("emailId");
  }
}
