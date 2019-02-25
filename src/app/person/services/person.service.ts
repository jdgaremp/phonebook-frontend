import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from '../models/person.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class PersonService {

  apiUrl = 'http://localhost:8080'
  endpoint = 'persons'
  serializer = new PersonSerializer();

  constructor(private http: HttpClient) { }

  searchPersons(term: string) {

    return this.http.get<Person>(
      `${this.apiUrl}/${this.endpoint}/search?firstname=${term}&lastname=${term}&phonenumber=${term}`
    ).pipe(
      map((response: any) => {
        return response.map(personJson => this.serializer.fromJson(personJson))
      })
    )
  }

  getPerson(id: number): Observable<Person> {

    return this.http.get<Person>(`${this.apiUrl}/${this.endpoint}/${id}`)
      .pipe(
        map((response: any) => {

          return this.serializer.fromJson(response)
        })
      )
  }

  addPerson(person: Person): Observable<any> {
    console.log("Juliette:    " + person.getId() + " " + person.getLastName())

    return this.http.post(`${this.apiUrl}/${this.endpoint}`, this.serializer.toJson(person))
  }

  putPerson(person: Person) {

    return this.http.put(`${this.apiUrl}/${this.endpoint}/${person.getId()}`, this.serializer.toJson(person))
  }
}

class PersonSerializer {

  fromJson(json: any): Person {
    console.log(json.id + json.firstName)
    return new Person(json.id, json.firstName, json.lastName, json.phoneNumber)
  }

  toJson(person: Person): any {

    return {
      firstName: person.getFirstName(),
      lastName: person.getLastName(),
      phoneNumber: person.getTelephone()
    }
  }
}