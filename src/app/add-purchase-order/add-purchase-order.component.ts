import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-add-purchase-order',
  templateUrl: './add-purchase-order.component.html',
  styleUrls: ['./add-purchase-order.component.css']
})
export class AddPurchaseOrderComponent implements OnInit {
  purchaseform: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.purchaseform = this.fb.group({
      ordernumber: '',
      companyname: '',
      productname: '',
      rate: '',
      quantity: '',
      totalprice: ''
    })
  }
  onSubmit() {
    console.log(this.purchaseform);
  }
}