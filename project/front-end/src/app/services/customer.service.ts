import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl: string = 'http://localhost:8081/customer/';
  private httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', 'localhost:4200'); 
  
  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<any> 
  {
    return this.httpClient.get(`${this.baseUrl}` + 'findAll');
  }

  getCustomer(id: number): Observable<any> {
    //console.log("getStock() id is: "+id)
    return this.httpClient.get(`${this.baseUrl}find/${id}`);
  }

  addCustomer(customer: Customer): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + 'insert', customer, { headers: this.httpHeaders });
  }

  modCustomer(customer: Customer): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}` + 'update', customer, { headers: this.httpHeaders });
  }

  delCustomer(id: number): Observable<Object> {
    //console.log(id);
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
  }
}
