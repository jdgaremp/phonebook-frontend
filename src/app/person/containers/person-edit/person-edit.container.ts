import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

import { PersonService } from '../../services/person.service'

import { Person } from '../../models/person.model';


@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.container.html',
  styleUrls: ['./person-edit.container.css']
})
export class PersonEditContainer implements OnInit {

  PERSON_FETCH_ERROR = 'person_fetch_error'
  PERSON_FETCH_LOADING = 'person_fetch_loading'
  PERSON_FETCH_SUCCESS = 'person_fetch_success'

  viewState = this.PERSON_FETCH_LOADING

  PERSON_EDIT_ERROR = 'person_edit_error'
  PERSON_EDIT_LOADING = 'person_edit_loading'
  PERSON_EDIT_SUCCESS = 'person_edit_success'
  PERSON_EDIT_INIT = 'person_edit_init'

  requestState = this.PERSON_EDIT_INIT

  @Input()
  person: Person

  personId

  //icons
  faPhoneSquare = faPhoneSquare

  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.personId = params['id']
      this.personService.getPerson(+params['id'])
      // this.personService.getPerson

      // this.personId = params['id']
      // this.personService.getPerson(+params['id']).subscribe(
      //   person => {
      //     this.person = person
      //     this.viewState = this.PERSON_FETCH_SUCCESS
      //   },
      //   error => {
      //     this.viewState = this.PERSON_FETCH_ERROR
      //   })
    })
  }
  onConfirm(person) {

    this.requestState = this.PERSON_EDIT_LOADING
    this.personService.putPerson(person).subscribe(
      response => {
        this.requestState = this.PERSON_EDIT_SUCCESS
      },
      error => {
        this.requestState = this.PERSON_EDIT_ERROR
      }
    )
  }

  // onConfirm(person) {

  //   this.requestState = this.PERSON_EDIT_LOADING
  //   this.personService.putPerson(person).subscribe(
  //     response => {
  //       this.requestState = this.PERSON_EDIT_SUCCESS
  //     },
  //     error => {
  //       this.requestState = this.PERSON_EDIT_ERROR
  //     }
  //   )
  // }

  onCancel() {

    this.router.navigate(['/'])
  }
}
