import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  reactiveForms: FormGroup;
  submitted = false;
  selectedFile;

  constructor(private fb: FormBuilder, private user: ContactService, private router: Router) { }

  get validation() {
    return this.reactiveForms.controls;
  }

  ngOnInit() {
    this.reactiveForms = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
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
    let RegisteredDetails = {
      username: this.reactiveForms.controls.username.value,
      password: this.reactiveForms.controls.password.value,
      email: this.reactiveForms.controls.email.value,
      city: this.reactiveForms.controls.city.value,
      role: this.reactiveForms.controls.role.value,
    }
    if (this.reactiveForms.invalid) {
      return;
    } else {
      this.user.signupVerify(RegisteredDetails).subscribe(res => {
        
        let loginData = {
          email: RegisteredDetails.email,
          password: RegisteredDetails.password
        }

        this.user.loginVerify(loginData).subscribe((data: any) => {
          this.user.setUserSession(data);
          this.router.navigate(['home/user']);
          window.location.reload();
        });

      });
    }
  }

}
