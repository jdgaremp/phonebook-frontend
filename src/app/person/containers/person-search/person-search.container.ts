import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service'

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.container.html',
  styleUrls: ['./person-search.container.css']
})
export class PersonSearchContainer implements OnInit {

  SEARCH_ITEMS_VALUE_NAME = 'search_items'

  EMPTY_SEARCH_BAR_STATE = 'empty_search_bar'
  SEARCH_LOADING_STATE   = 'search_load'
  SEARCH_MATCH_STATE     = 'search_match'
  SEARCH_NO_MATCH_STATE  = 'search_no_match'
  SEARCH_ERROR_STATE     = 'search_error'

  viewState = this.EMPTY_SEARCH_BAR_STATE
  persons: Person[] = []

  constructor(private personService: PersonService) { }

  ngOnInit() {

  }

  onSearch(event) {

    if (event.value == '') {

      this.viewState = this.EMPTY_SEARCH_BAR_STATE

    } else {

      this.viewState = this.SEARCH_LOADING_STATE

      this.personService.searchPersons(event.value)
        .subscribe(persons => {

          this.persons = persons

          this.viewState = this.persons.length > 0 ? 
            this.SEARCH_MATCH_STATE : this.SEARCH_NO_MATCH_STATE
        }, 
        error => this.viewState = this.SEARCH_ERROR_STATE)
    }
  }
}
