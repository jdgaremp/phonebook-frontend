import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  TELEPHONE_VALIDATION_REGEX=/\+\d{2,}\s\d{2,}\s\d{6,}$/
  FIRST_NAME_FIELD_VALUE_NAME="firstName";
  LAST_NAME_FIELD_VALUE_NAME="lastName";
  TELEPHONE_FIELD_VALUE_NAME="telephone";

  
  @Output()
  formChange = new EventEmitter()

  @Input()
  person:Person = new Person(
    0, // id
    "", // firstname
    "", // lastname
    "" // telephone
  )

  constructor() { }

  ngOnInit() {
    
  }

  onFieldChange(event) {

    console.log(event)

    this.person.setFirstName(event.valueName === this.FIRST_NAME_FIELD_VALUE_NAME ? event.value : this.person.getFirstName())
    this.person.setLastName(event.valueName === this.LAST_NAME_FIELD_VALUE_NAME ? event.value : this.person.getLastName())
    this.person.setTelephone(event.valueName === this.TELEPHONE_FIELD_VALUE_NAME ? event.value : this.person.getTelephone())
   
    this.formChange.emit({
      isValid: this.person.isValid(),
      value: this.person
    })
  }
}
