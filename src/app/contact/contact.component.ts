import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  token = localStorage.getItem('token');

  constructor(private router:Router) { }

  ngOnInit() {
    if (this.token) {
      this.router.navigate(['/home']);
    }
  }

}
