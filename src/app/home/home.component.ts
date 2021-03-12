import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  role: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  users() {
    this.role = sessionStorage.getItem('role');
    //let details: any = jwtDecode(this.token);
    if (this.role == 'Admin') {
      alert('access granted!');
      this.router.navigate(['home/admin']);
    } else {
      alert('login as admin to continue!');
    }
  }

}
