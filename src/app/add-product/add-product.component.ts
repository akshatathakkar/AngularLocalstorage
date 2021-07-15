import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  productform: FormGroup;
  productList: any = [];
  companyList: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.companyList = JSON.parse(localStorage.getItem('company') || '');
    console.log(this.companyList);
    this.initializeForm();
  }

  initializeForm(): void {
    this.productform = this.fb.group({
      name: '',
      companyname: '',
      cost: ''
    });
  }

  onSubmit() {
    console.log(this.productform.value);
    this.productList.push(this.productform.value);
    localStorage.setItem('products', JSON.stringify(this.productList));
  }
}