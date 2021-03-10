import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AdminsComponent } from './admins/admins.component';
import { UsersComponent } from './users/users.component';
import { AuthenticationGuard } from '../auth/authentication.guard';
import { EdituserComponent } from './edituser/edituser.component';


const routes: Routes = [
  {
    path: 'home', canActivate:[AuthenticationGuard], component: HomeComponent, children: [
      { path: '', pathMatch:'full', redirectTo: '/home/user' },
      { path: 'user', component: UsersComponent },
      { path: 'admin', component: AdminsComponent },
      { path: 'edituser/:id', component: EdituserComponent }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
