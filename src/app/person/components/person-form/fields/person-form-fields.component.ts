import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../../../models/person.model';

@Component({
  selector: 'app-person-form-fields',
  templateUrl: './person-form-fields.component.html',
  styleUrls: ['./person-form-fields.component.css']
})
export class PersonFormFieldsComponent implements OnInit {

  TELEPHONE_VALIDATION_REGEX = /\+\d{2,}\s\d{2,}\s\d{6,}$/
  FIRST_NAME_VALIDATION_REGEX = /\S+/
  LAST_NAME_VALIDATION_REGEX = /\S+/

  FIRST_NAME_FIELD_VALUE_NAME = "firstName";
  LAST_NAME_FIELD_VALUE_NAME = "lastName";
  TELEPHONE_FIELD_VALUE_NAME = "telephone";


  @Output()
  formChange = new EventEmitter()

  @Input()
  person: Person

  constructor() { }

  ngOnInit() {

    this.person = (this.person || new Person(0, "", "", ""))
  }

  onFieldChange(event) {

    this.person.setFirstName(event.valueName === this.FIRST_NAME_FIELD_VALUE_NAME ? event.value : this.person.getFirstName())
    this.person.setLastName(event.valueName === this.LAST_NAME_FIELD_VALUE_NAME ? event.value : this.person.getLastName())
    this.person.setTelephone(event.valueName === this.TELEPHONE_FIELD_VALUE_NAME ? event.value : this.person.getTelephone())

    this.formChange.emit({
      isValid: this.person.isValid(),
      value: this.person
    })
  }
}
