import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AdminsComponent } from './admins/admins.component';
import { UsersComponent } from './users/users.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminsComponent, UsersComponent, EdituserComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
