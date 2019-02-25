import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './routing/app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PersonModule } from './person/person.module'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    PersonModule.forRoot(),
    FontAwesomeModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
