import { Injectable } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
 
import { Person } from './person.model';
 
@Injectable()
export class Api {
 
  apiUrl: string

  constructor(private http: HttpClientModule) {

  }

  getPersons() {
    const persons: Array<Person> = [
        new Person(1, "john", "smith", "+32 34 654372"),
        new Person(2, "john", "smith", "+32 34 654372"),
        new Person(3, "john", "smith", "+32 34 654372"),
        new Person(4, "john", "smith", "+32 34 654372"),
        new Person(5, "john", "smith", "+32 34 654372"),
        new Person(6, "john", "smith", "+32 34 654372"),
    ]

    console.log(persons)

    return persons
  }
}