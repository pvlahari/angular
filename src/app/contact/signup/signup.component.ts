import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  reactiveForms: FormGroup;
  submitted = false;
  selectedFile;

  constructor(private fb: FormBuilder, private contact: ContactService, private route: Router) { }

  get validation() {
    return this.reactiveForms.controls;
  }

  ngOnInit() {
    this.reactiveForms = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required]],
      role: ['', [Validators.required]],
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
    if (this.reactiveForms.invalid) {
      return;
    } else {
      let username = this.reactiveForms.controls.firstName.value + ' ' + this.reactiveForms.controls.lastName.value;
      let RegisteredDetails = {
        username: username,
        password: this.reactiveForms.controls.password.value,
        email: this.reactiveForms.controls.email.value,
        city: this.reactiveForms.controls.city.value,
        role: this.reactiveForms.controls.role.value
      }
      this.contact.register(RegisteredDetails).subscribe(data => {
        let logindata = {
          email: RegisteredDetails.email,
          password: RegisteredDetails.password
        }
        this.contact.loginVerify(logindata).subscribe(user => {
          console.log(user);
          if (user.token) {
            localStorage.setItem('token', user.token);
            this.route.navigate(['/home/user']);
            window.location.reload();
          }
        });
      });
    }
  }

}
