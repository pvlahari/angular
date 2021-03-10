import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  editForm = {
    username: '',
    email: '',
    phno: ''
  };
  
  updatedForm: FormData;

  constructor(private router: ActivatedRoute, private r: Router, private updatedata: HomeService) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.editForm.username = params.username;
      this.editForm.email = params.email;
      this.editForm.phno = params.phno;
    });
  }

  update(editForm) {
    this.updatedForm = new FormData();
    this.updatedForm.append('username', editForm.username);
    this.updatedForm.append('email', editForm.email);
    this.updatedForm.append('phno', editForm.phno);

    this.updatedata.updateuserdata(this.updatedForm).subscribe((data: any) => {
      alert('updated!');
      this.r.navigate(['home/admin']);
    });
  }

}
