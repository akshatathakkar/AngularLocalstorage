import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddPurchaseOrderComponent } from './add-purchase-order/add-purchase-order.component';


const routes: Routes = [
  {
    path: 'add-company',
    component: AddCompanyComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'add-purchase-order',
    component: AddPurchaseOrderComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
