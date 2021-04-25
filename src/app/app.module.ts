import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';
import { AuthenticationGuard } from './auth/authentication.guard';
import { LogoutComponent } from './logout/logout.component';
import { HomeModule } from './home/home.module';
  
import { HttpInterceptorsService } from './services/http-interceptors.service';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LogoutComponent,
    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ContactModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationGuard,   
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorsService, multi: true }
  ],
  entryComponents: [
    ErrorDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
