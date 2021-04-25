import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private loginuser: ContactService, private router: Router) { }

  get validation() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
      let loginDetails = {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      }
      this.loginuser.loginVerify(loginDetails).subscribe((data: any) => {
<<<<<<< HEAD
          this.loginuser.setUserSession(data);
          this.router.navigate(['home/user']);
=======
        if (data.body.token) {
          localStorage.setItem('token', data.body.token);
          this.router.navigate(['/home/user']);
>>>>>>> new changes
          window.location.reload();
      });
    }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }

}
