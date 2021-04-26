import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  token: any;

  constructor(private router: Router) { }

  ngOnInit() { }

  users() {
    this.token = localStorage.getItem('token');
    let details: any = jwtDecode(this.token);
    if (details.role == 'admin') {
      alert('access granted!');
      this.router.navigate(['home/admin']);
    } else {
      alert('login as admin to continue!');
    }
  }

}
