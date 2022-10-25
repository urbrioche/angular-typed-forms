import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfileFormModel } from '../types/user-profile-form.model';

@Component({
  selector: 'app-typed-form-demo',
  templateUrl: './typed-form-demo.component.html',
  styleUrls: ['./typed-form-demo.component.css']
})
export class TypedFormDemoComponent implements OnInit {

  // infer by TypeScript
  // form = this.fb.group({
  //   email: this.fb.control('i@me.com'),
  //   password: this.fb.control('abc123'),
  //   address: this.fb.control('No. 201, Furong Rd., Houli Dist.'),
  //   city: this.fb.control('Taichung City'),
  //   zip: this.fb.control('421'),
  // });

  // predefined type model
  form: FormGroup<UserProfileFormModel>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group<UserProfileFormModel>({
      email: this.fb.control('i@me.com', {validators: [Validators.email, Validators.required]}),
      password: this.fb.control('abc123', {validators:[Validators.minLength(6)]}),
      address: this.fb.control('No. 201, Furong Rd., Houli Dist.'),
      city: this.fb.control('Taichung City'),
      zip: this.fb.control('421'),
    });
  }

  ngOnInit(): void {
    this.form.controls.zip.disable();
  }

}

