import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

<<<<<<< HEAD
  role: string;
=======
  token: any;
>>>>>>> new changes

  constructor(private router: Router) { }

  ngOnInit() { }

  users() {
<<<<<<< HEAD
    this.role = sessionStorage.getItem('role');
    //let details: any = jwtDecode(this.token);
    if (this.role == 'Admin') {
=======
    this.token = localStorage.getItem('token');
    let details: any = jwtDecode(this.token);
    console.log(details);
    if (details.role == 'admin') {
>>>>>>> new changes
      alert('access granted!');
      this.router.navigate(['home/admin']);
    } else {
      alert('login as admin to continue!');
    }
  }

}
