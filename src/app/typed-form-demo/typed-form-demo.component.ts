import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-typed-form-demo',
  templateUrl: './typed-form-demo.component.html',
  styleUrls: ['./typed-form-demo.component.css']
})
export class TypedFormDemoComponent implements OnInit {
  cities = ['Taipei', 'Taichung', 'Kaohsiung'];
  // infer by TypeScript
  form = this.fb.group({
    email: this.fb.control('i@me.com'),
    password: this.fb.control('abc123'),
    address: this.fb.control('No. 201, Furong Rd., Houli Dist.'),
    city: this.fb.control('Taichung'),
    zip: this.fb.control('421'),
    checkMeOut: this.fb.control(true),
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
