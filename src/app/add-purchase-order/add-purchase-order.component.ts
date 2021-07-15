import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-add-purchase-order',
  templateUrl: './add-purchase-order.component.html',
  styleUrls: ['./add-purchase-order.component.css']
})
export class AddPurchaseOrderComponent implements OnInit {
  purchaseform: FormGroup;
  companyList: any;
  productList: any;
  totalPrice: number;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productList = JSON.parse(localStorage.getItem('products') || '');
    console.log(this.productList);
    this.companyList = JSON.parse(localStorage.getItem('company') || '');
    console.log(this.companyList);
    this.initializeForm();
  }
  initializeForm(): void {
    this.purchaseform = this.fb.group({
      ordernumber: '',
      companyname: '',
      productname: '',
      rate: '',
      quantity: '',
    })
  }
  onSubmit() {
    this.totalPrice =this.purchaseform.get('quantity')?.value*this.purchaseform.get('rate')?.value;
    console.log(this.purchaseform.value);
  }
}