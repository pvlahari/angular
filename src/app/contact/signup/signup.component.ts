import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  reactiveForms : FormGroup;
  submitted = false;
  selectedFile;

  constructor(private fb:FormBuilder) { }

  get validation() {
    return this.reactiveForms.controls;
  }

  ngOnInit() {
    this.reactiveForms = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      state: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(14)]],
      photo: ['', [Validators.required]],
    });
  }

  ImageUpload(event) {
      this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.submitted = true;
    if (this.reactiveForms.invalid) {
      return;
    }
  }

  save() {
    let RegisteredDetails = {
      firstName: this.reactiveForms.controls.firstName.value,
      lastName: this.reactiveForms.controls.lastName.value,
      email: this.reactiveForms.controls.email.value,
      password: this.reactiveForms.controls.password.value,
      state: this.reactiveForms.controls.state.value,
      mobile: this.reactiveForms.controls.mobile.value,
      photo: this.selectedFile.name
    }
    RegisteredDetails;
  }

}
