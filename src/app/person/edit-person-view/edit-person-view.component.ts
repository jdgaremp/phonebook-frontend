import { Component, OnInit, Input } from '@angular/core';

import { Person } from '../person.model';


@Component({
  selector: 'app-edit-person-view',
  templateUrl: './edit-person-view.component.html',
  styleUrls: ['./edit-person-view.component.css']
})
export class EditPersonViewComponent implements OnInit {
  
  @Input()
  person: Person

  constructor() { }

  ngOnInit() {
  }

}
