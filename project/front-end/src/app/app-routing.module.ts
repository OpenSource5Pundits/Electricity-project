import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillListUiComponent } from './bill-list-ui/bill-list-ui.component';
import { CustomerListUiComponent } from './customer-list-ui/customer-list-ui.component';
import { CustomerModUiComponent } from './customer-mod-ui/customer-mod-ui.component';
import { CustomerUiComponent } from './customer-ui/customer-ui.component';
import { ForgetPasswordUiComponent } from './forget-password-ui/forget-password-ui.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { HomeUiComponent } from './home-ui/home-ui.component';
import { LoginUiComponent } from './login-ui/login-ui.component';
import { UnpaidBillComponent } from './unpaid-bill/unpaid-bill.component';

const routes: Routes = [
  {path: '', pathMatch:"full", redirectTo:"home"},
  {path:"home", component: HomeUiComponent},
  {path:"login", component: LoginUiComponent},
  {path: "forgetPass", component: ForgetPasswordUiComponent},
  {path: "addCustomer", component: CustomerUiComponent},
  {path: "showCustomer", component:CustomerListUiComponent},
  {path: "updateCustomer/:custId", component:CustomerModUiComponent},
  {path: "deleteCustomer/:custId", component: CustomerListUiComponent},
  {path: "generateBill/:meterNo", component:GenerateBillComponent},
  {path: "viewBills", component:BillListUiComponent},
  {path:"unpaidBills", component:UnpaidBillComponent},
  {path:'**', redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
