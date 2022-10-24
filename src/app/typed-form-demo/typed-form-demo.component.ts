import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-typed-form-demo',
  templateUrl: './typed-form-demo.component.html',
  styleUrls: ['./typed-form-demo.component.css']
})
export class TypedFormDemoComponent implements OnInit {

  form = this.fb.group({
    email: this.fb.control('i@me.com'),
    password: this.fb.control('abc123'),
    address: this.fb.control('No. 201, Furong Rd., Houli Dist.'),
    city: this.fb.control('Taichung City'),
    zip: this.fb.control('421'),
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.controls.zip.disable();
  }

}
