import { Component, OnInit, Input } from '@angular/core';

import { faEdit } from '@fortawesome/free-solid-svg-icons';


import { Person } from '../person.model';


@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnInit {

  @Input()
  persons: Person[] = []

  // icons
  faEdit = faEdit


  constructor() { }

  ngOnInit() {
  }
}
