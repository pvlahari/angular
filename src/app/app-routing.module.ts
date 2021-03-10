import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './auth/authentication.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/contact/signin' },
  { path: 'home/', canActivate:[AuthenticationGuard], component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'contactmodule', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'homemodule', loadChildren: './home/home.module#HomeModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
