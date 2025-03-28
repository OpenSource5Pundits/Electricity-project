import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer'; 
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list-ui',
  templateUrl: './customer-list-ui.component.html',
  styleUrls: ['./customer-list-ui.component.css']
})
export class CustomerListUiComponent implements OnInit {

  customers : Customer[]=[];

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((x)=>{this.customers=x});
  }

  delCustomer(event: any, index: any) {  
    let id=this.customers[index].custId;
    this.customerService.delCustomer(id)  
      .subscribe((data: any) =>
      {  
        console.log(data);  
        this.ngOnInit();
      });
    }
}
