import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfigService } from './core/config/config.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LoginComponent, DashboardComponent, RegistrationComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConfigService]
})
export class AppModule { }
