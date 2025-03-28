import { Bill } from "./bill";
export class Customer {
    constructor(public custId: number, public custName: string, public address: string, public phone: string, public emailId: string, public bill: Bill){}
}
//public meterNo: number