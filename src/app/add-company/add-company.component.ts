import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  companyform: FormGroup;
  data: any = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.companyform = this.fb.group({
      name: '',
      gst: '',
    })
  }
  onSubmit() {
    console.log(this.companyform.value);
    this.data.push(this.companyform.value);
    localStorage.setItem('company', JSON.stringify(this.data));
  }

}