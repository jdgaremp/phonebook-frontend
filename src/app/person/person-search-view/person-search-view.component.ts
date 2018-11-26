import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-search-view',
  templateUrl: './person-search-view.component.html',
  styleUrls: ['./person-search-view.component.css']
})
export class PersonSearchViewComponent implements OnInit {

  SEARCH_ITEMS_VALUE_NAME = 'search_items'

  EMPTY_SEARCH_BAR_STATE = 'empty_search_bar'
  SEARCH_MATCH_STATE     = 'search_match'
  SEARCH_NO_MATCH_STATE  = 'search_no_match'

  viewState = this.EMPTY_SEARCH_BAR_STATE
  persons: Person[] = []

  constructor() { }

  ngOnInit() {

  }

  onSearch(event) {

    if (event.value == '') {

      this.viewState = this.EMPTY_SEARCH_BAR_STATE

    } else {

      this.persons = [] // call api service

      this.viewState = this.persons.length > 0 ? 
        this.SEARCH_MATCH_STATE : this.SEARCH_NO_MATCH_STATE
    }
  }
}
