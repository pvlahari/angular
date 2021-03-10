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

  userslist: any;
  address: any;
  company: any;
  name: any;
  date: any = new Date();
  month: any = new Date();
  year: any = new Date();
  firstday: any;
  lastday: any;

  constructor(private users: HomeService, private router: Router, private datepipe: DatePipe) { }

  ngOnInit() {
    this.users.userslist().subscribe((data: any) => {
      //console.log(data.httpOptions_headers)
      if (data.status == 200) {
        alert('success!');
      }
      this.userslist = data;
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
    this.name = user.name;
    this.address = user.address;
    this.company = user.company;
  }

  edituser(user) {
    this.router.navigate(['home/edituser/', user.id], { queryParams: { username: user.username, email: user.email, phno: user.phone }, queryParamsHandling: 'merge' });
  }

}
