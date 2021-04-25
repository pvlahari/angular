import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css'],
  providers: [DatePipe]
})

export class AdminsComponent implements OnInit {

  city: any;
  email: any;
  userslist: any;
<<<<<<< HEAD
  username: any;
=======
  user: any;
>>>>>>> new changes
  date: any = new Date();
  month: any = new Date();
  year: any = new Date();
  firstday: any;
  lastday: any;

  constructor(private users: HomeService, private router: Router, private datepipe: DatePipe) { }

  ngOnInit() {
    this.users.userslist().subscribe((data: any) => {
      if (data.status == 200) {
        console.log(data);
        this.userslist = data.body;
      }
    });
    this.date = this.datepipe.transform(this.date, 'dd'); //current date
    this.month = this.datepipe.transform(this.month, 'MMM'); //current month
    this.year = this.datepipe.transform(this.year, 'yyyy'); //current year

    //week
    let myDate: any = new Date;
    let startDay = 1;
    let d = myDate.getDay();
    let weekStart = new Date(myDate.valueOf() - (d <= 0 ? 7 - startDay : d - startDay) * 86400000);
    let weekEnd = new Date(weekStart.valueOf() + 6 * 86400000);
    this.firstday = this.datepipe.transform(weekStart, 'dd');  //monday
    this.lastday = this.datepipe.transform(weekEnd, 'dd');   //sunday
  }

  details(user) {
<<<<<<< HEAD
    this.username = user.username;
    this.email = user.email;
    this.city = user.city;
=======
    this.user = user;
>>>>>>> new changes
  }

  edituser(user) {
     //this.router.navigate(['home/edituser/', user._id], { queryParams: { id: user._id, username: user.username, email: user.email, city: user.city }, queryParamsHandling: 'merge' });
    this.router.navigate(['home/edituser/', user._id], { queryParams: { id: user._id }});
  }

}
