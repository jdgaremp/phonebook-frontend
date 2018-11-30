import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonSearchContainer } from '../person/containers/person-search/person-search.container';
import { PersonAddContainer } from '../person/containers/person-add/person-add.container';
import { PersonEditContainer } from '../person/containers/person-edit/person-edit.container';

const routes: Routes = [
  { path: '', component: PersonSearchContainer },
  { path: 'person/search',  component: PersonSearchContainer },
  { path: 'person/add',  component: PersonAddContainer },
  { path: 'person/:id/edit', component: PersonEditContainer },
]


//const routes: Routes = [
//  { path: 'person', loadChildren: '../person/person.module#PersonModule' }
//]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
