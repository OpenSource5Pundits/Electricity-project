import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bill } from '../model/bill'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BillService {

  private baseUrl: string = 'http://localhost:8081/bill/';
  private httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', 'localhost:4200'); 
  
  constructor(private httpClient: HttpClient) {}

  getBills(): Observable<any> 
  {
    return this.httpClient.get(`${this.baseUrl}` + 'findAll');
  }

  getUnpaidBills(): Observable<any> 
  {
    return this.httpClient.get(`${this.baseUrl}` + 'findByP');
  }

  getBill(id: number): Observable<any> {
    //console.log("getStock() id is: "+id)
    return this.httpClient.get(`${this.baseUrl}find/${id}`);
  }

  generateBill(bill: Bill): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + 'insert', bill, { headers: this.httpHeaders });
  }

  modBill(bill: Bill): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}` + 'update', bill, { headers: this.httpHeaders });
  }

  delBill(id: number): Observable<Object> {
    //console.log(id);
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
  }
}
