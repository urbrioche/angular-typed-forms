import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToForm} from '../types/to.form';
import {UserProfile} from '../types/user.profile';

// infer from UserProfile domain model
type UserProfileForm = ToForm<UserProfile>;

@Component({
  selector: 'app-typed-form-demo',
  templateUrl: './typed-form-demo.component.html',
  styleUrls: ['./typed-form-demo.component.css']
})
export class TypedFormDemoComponent implements OnInit {
  cities = ['Taipei', 'Taichung', 'Kaohsiung'];
  // infer by TypeScript
  // form = this.fb.group({
  //   email: this.fb.control('i@me.com', {validators: [Validators.email, Validators.required]}),
  //   password: this.fb.control('abc123', {validators: [Validators.minLength(6)]}),
  //   address: this.fb.control('No. 201, Furong Rd., Houli Dist.'),
  //   city: this.fb.control('Taichung'),
  //   zip: this.fb.control('421'),
  //   checkMeOut: this.fb.control(true),
  // });

  // pre-defined FormGroup model
  // form: FormGroup<UserProfileFormModel>;

  // we have domain model and FormGroup model infer from domain model
  form: FormGroup<UserProfileForm>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: this.fb.control('i@me.com', {validators: [Validators.email, Validators.required]}),
      password: this.fb.control('abc123', {validators: [Validators.minLength(6)]}),
      address: this.fb.control('No. 201, Furong Rd., Houli Dist.'),
      city: this.fb.control('Taichung'),
      zip: this.fb.control('421'),
      checkMeOut: this.fb.control(true),
    });
  }

  ngOnInit(): void {
    this.form.controls.zip.disable();
  }

  update(): void {
    this.form.patchValue({
      email: 'iamhere@me.com',
      address: 'haha',
      // sometimes we have typo, strong type can check the error in compile time instead of runtime
      // adress: '',
      city: 'Taipei',
    })
  }
}
