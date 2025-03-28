import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer'; 
import { CustomerService } from '../services/customer.service'; 
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Bill } from '../model/bill';
import { BillService } from '../services/bill.service';
@Component({
  selector: 'app-customer-mod-ui',
  templateUrl: './customer-mod-ui.component.html',
  styleUrls: ['./customer-mod-ui.component.css']
})
export class CustomerModUiComponent implements OnInit {

  title = 'modify-module';
  isConfirmed: boolean=false;
  msg: string="";
  customer!: Customer;
  bill!: Bill;
  public myForm!: FormGroup;

constructor(private customerService: CustomerService, private route: ActivatedRoute, private billService: BillService){
  this.customer=new Customer(0, '', '',"","",this.bill);
    this.createForm();
}

ngOnInit(): void {
  console.log("In ngOnInit()")
  this.route.params.subscribe((parameters)=> {
      this.customerService.getCustomer(parseInt(parameters['custId'])).subscribe((x)=> {
        this.customer=x? x: null;
      });
  });
  this.route.params.subscribe((parameters)=> {
    this.billService.getBill(parseInt(parameters['meterNo'])).subscribe((x)=> {
      this.bill=x? x: null;
    });
});
}

createForm() {
  this.myForm = new FormGroup({
    name : new FormControl(null, [Validators.required]),
    address : new FormControl(null, [Validators.required]),
    phone : new FormControl(null, [Validators.required]),
    emailId: new FormControl(null, [Validators.required]),
    //meterNo: new FormControl(null, [Validators.required, Validators.min(1)])
  })
}

mySubmit() {
  let id=this.customer.custId;
  let bill = this.customer.bill;
  this.customer = new Customer(id,this.name?.value,this.address?.value,this.phone?.value,this.emailId?.value,bill);
  this.msg = `Customer name is ${this.customer.custName}  Address is ${this.customer.address}  Phone number is ${this.customer.phone} EmailId is ${this.customer.emailId}`;
  this.customerService.addCustomer(this.customer).subscribe((x)=>{console.log(x)});//you can't give blank inside subscribe, so do a dummy job
}

toggleConfirmed() {
  console.log(this.myForm.valid);
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

// get meterNo() {
//   return this.myForm.get("meterNo");
// }
}
