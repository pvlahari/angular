import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  token : any = localStorage.getItem('token');

  constructor(private router: Router) { }

  ngOnInit() { 
    if (this.token) {
      return true;
    } else {
      this.router.navigate(['/contact/signin']);
    }
  }

  logout() {
    this.router.navigate(['/logout']);
    window.location.reload();
  }

};
