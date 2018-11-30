import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './routing/app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module'

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
    PersonModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
