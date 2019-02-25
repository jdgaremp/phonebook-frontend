import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { PersonService } from '../../services/person.service';

import { Person } from '../../models/person.model';


@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Input()
  person: Person
  @Output()
  confirm = new EventEmitter()
  @Output()
  cancel = new EventEmitter()

  confirmButtonEnabled: boolean

  constructor(private router: Router, private personService: PersonService) { }

  ngOnInit() {
    this.confirmButtonEnabled = this.person && this.person.isValid()
  }

  onFormChange(event) {
    this.person = event.value
    this.confirmButtonEnabled = event.value.isValid()
  }

  onButtonClick(event) {

    event === 'confirm' ?
      this.confirm.emit(this.person) : this.cancel.emit(null)
  }
}
