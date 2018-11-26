import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Api } from './shared/api.service';
import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
import { TextFieldComponent } from './shared/text-field/text-field.component'
import { PersonFormComponent } from './person/person-form/person-form.component';
import { PersonTableComponent } from './person/person-table/person-table.component';
import { PersonSearchViewComponent } from './person/person-search-view/person-search-view.component';
import { AddPersonViewComponent } from './person/add-person-view/add-person-view.component';
import { ConfirmCancelBtnGroupComponent } from './shared/confirm-cancel-btn-group/confirm-cancel-btn-group.component';
import { EditPersonViewComponent } from './person/edit-person-view/edit-person-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TextFieldComponent,
    PersonFormComponent,
    PersonTableComponent,
    PersonSearchViewComponent,
    AddPersonViewComponent,
    ConfirmCancelBtnGroupComponent,
    EditPersonViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
