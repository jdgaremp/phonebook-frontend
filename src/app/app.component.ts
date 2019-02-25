import { Component, OnInit } from '@angular/core';

import { Person } from './person/models/person.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'phonebook';
  person = new Person(0, "test", "nom", "+33 5 666666")

  constructor() { }

  ngOnInit() {

  }

  tesst(event) {
    console.log(event)
  }
}
