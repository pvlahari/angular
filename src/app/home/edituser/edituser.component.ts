import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { ContactService } from '../../contact/contact.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  editForm = {
    username: '',
    email: '',
    city: ''
  };

  userid;
  updatedForm: FormData;

  constructor(private router: ActivatedRoute, private r: Router, private updatedata: HomeService) { }

  ngOnInit() {

    this.router.queryParams.subscribe(params => {
      this.userid = params.id;
    });

    this.updatedata.editUser(this.userid).subscribe(data => {
        this.editForm.username = data.username;
        this.editForm.email = data.email;
        this.editForm.city = data.city;
    });

  }

  update(editForm) {
    // this.updatedForm = new FormData();
    // this.updatedForm.append('id', this.userid);
    // this.updatedForm.append('username', editForm.username);

    let updatedForm = {
      id: this.userid,
      username: editForm.username,
      email: editForm.email,
      city: editForm.city
    };

    this.updatedata.updateuserdata(updatedForm).subscribe(res => {
      alert('updated user successfully!');
      this.r.navigate(['home/admin']);
    });
  }

}
