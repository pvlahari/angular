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
  { path: 'contactmodule', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'homemodule', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
