import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
<<<<<<< HEAD
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
=======
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
>>>>>>> new changes

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  reactiveForms: FormGroup;
  submitted = false;
  selectedFile;

<<<<<<< HEAD
  constructor(private fb: FormBuilder, private user: ContactService, private router: Router) { }
=======
  constructor(private fb: FormBuilder, private contact: ContactService, private route: Router) { }
>>>>>>> new changes

  get validation() {
    return this.reactiveForms.controls;
  }

  ngOnInit() {
    this.reactiveForms = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
<<<<<<< HEAD
      email: ['', [Validators.required, Validators.email]],
=======
>>>>>>> new changes
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
<<<<<<< HEAD
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

=======
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
        if (data.status == 200) {
          let logindata = {
            email: RegisteredDetails.email,
            password: RegisteredDetails.password
          }
          this.contact.loginVerify(logindata).subscribe(user => {
            if (user.status == 200) {
              console.log(user);
              if (user.body.token) {
                localStorage.setItem('token', user.body.token);
                this.route.navigate(['/home/user']);
                window.location.reload();
              }
            }
          });
        }
>>>>>>> new changes
      });
    }
  }

}
