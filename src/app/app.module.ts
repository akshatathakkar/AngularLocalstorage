import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddPurchaseOrderComponent } from './add-purchase-order/add-purchase-order.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddCompanyComponent,
    AddProductComponent,
    AddPurchaseOrderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
