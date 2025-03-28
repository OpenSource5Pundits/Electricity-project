import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeUiComponent } from './home-ui/home-ui.component';
import { LoginUiComponent } from './login-ui/login-ui.component';
import { CustomerUiComponent } from './customer-ui/customer-ui.component';
import { ForgetPasswordUiComponent } from './forget-password-ui/forget-password-ui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerModUiComponent } from './customer-mod-ui/customer-mod-ui.component';
import { CustomerListUiComponent } from './customer-list-ui/customer-list-ui.component';
import { UnpaidBillComponent } from './unpaid-bill/unpaid-bill.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { BillListUiComponent } from './bill-list-ui/bill-list-ui.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeUiComponent,
    LoginUiComponent,
    CustomerUiComponent,
    ForgetPasswordUiComponent,
    CustomerModUiComponent,
    CustomerListUiComponent,
    UnpaidBillComponent,
    GenerateBillComponent,
    BillListUiComponent,
    PayBillComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
