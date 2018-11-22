import { Component, OnInit} from '@angular/core';

import { Api } from './shared/api.service'
import { Person } from './shared/person.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'phonebook';
  persons: Person[] = [];

  constructor(private api: Api) {}

  ngOnInit(){

    this.persons = this.api.getPersons()
  }
}
