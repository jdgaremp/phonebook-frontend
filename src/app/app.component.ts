import { Component, OnInit} from '@angular/core';

import { Api } from './shared/api.service'
import { Person } from './person/person.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  person= new Person(0,"test","nom","+33 5 666666")
  constructor(private api: Api) {}

  ngOnInit(){

  }

  tesst(event) {
    console.log(event)
  }
}
