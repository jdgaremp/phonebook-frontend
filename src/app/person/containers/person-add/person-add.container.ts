import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.container.html',
  styleUrls: ['./person-add.container.css']
})
export class PersonAddContainer implements OnInit {

  INITIAL_STATE     = 'initial_state'
  ADD_SUCCESS_STATE = 'add_success_state'
  ADD_ERROR_STATE   = 'add_error_state'
  ADD_LOADING_STATE = 'add_loading_state'

  viewState = this.INITIAL_STATE

  constructor(private router: Router, private personService: PersonService) {}

  ngOnInit() {
  }

  onConfirm(person) {

    this.viewState = this.ADD_LOADING_STATE

    this.personService.addPerson(person)
      .subscribe(resp => this.viewState = this.ADD_SUCCESS_STATE, 
        error => this.viewState = this.ADD_ERROR_STATE)
  }

  onCancel() {

    this.router.navigate(['/'])
  }
}
