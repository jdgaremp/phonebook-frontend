import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';

//import { PersonRoutingModule } from './routing/person-routing.module'

import { PersonTableComponent } from './components/person-table/person-table.component'
import { PersonFormFieldsComponent } from './components/person-form/fields/person-form-fields.component'
import { PersonFormComponent } from './components/person-form/person-form.component'
import { PersonAddContainer } from './containers/person-add/person-add.container'
import { PersonEditContainer } from './containers/person-edit/person-edit.container'
import { PersonSearchContainer } from './containers/person-search/person-search.container'

import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    PersonTableComponent,
    PersonFormFieldsComponent,
    PersonFormComponent,
    PersonAddContainer,
    PersonEditContainer,
    PersonSearchContainer
  ],
  imports: [
    CommonModule,
    //PersonRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    PersonAddContainer,
    PersonEditContainer,
    PersonSearchContainer
  ]
})
export class PersonModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PersonModule,
      providers: [PersonService]
    }
  }
}
