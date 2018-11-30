import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonSearchContainer  } from '../containers/person-search/person-search.container'
import { PersonAddContainer  } from '../containers/person-add/person-add.container'
import { PersonEditContainer  } from "../containers/person-edit/person-edit.container";

const routes: Routes = [
    { path: 'person/search', component: PersonSearchContainer }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PersonRoutingModule { }