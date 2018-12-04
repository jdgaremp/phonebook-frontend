import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from '../models/person.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


const persons: Person[] = [
  new Person(0, "a", "name", "+33 33 333333"),
  new Person(1, "b", "name", "+33 33 333333"),
  new Person(3, "a", "name", "+33 33 333333"),
  new Person(4, "a", "name", "+33 33 333333")
]

@Injectable()
export class PersonService {

  apiUrl = 'http://localhost:3000'
  endpoint = 'persons'
  serializer = new PersonSerializer();

  constructor(private http: HttpClient) { }

  // searchPersons(term: string) {

  //   return this.http.get<Person>(
  //     `${this.apiUrl}/${this.endpoint}/search?firstname=${term}&lastname=${term}&telephone=${term}`
  //   ).pipe(
  //     map((response: any) => {
  //       return response.map(personJson => this.serializer.fromJson(personJson))
  //     })
  //   )
  // }

  searchPersons(term: string) {
    const tableOfPersons = []
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].getFirstName().indexOf(term) != -1 || persons[i].getLastName().indexOf(term) != -1 || persons[i].getTelephone().indexOf(term) != -1) {
        console.log("test OK")
        tableOfPersons.push(persons[i])
      }
    }
    return tableOfPersons;
  }

  getPerson(id: number): Person {
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].getId() === id) {
        return persons[i];
      }
    }

    // getPerson(id: number): Observable<Person> {
    // return this.http.get<Person>(`${this.apiUrl}/${this.endpoint}/${id}`)
    //   .pipe(
    //     map((response: any) => {

    //       return this.serializer.fromJson(response)
    //     })
    //   )
  }

  addPerson(person: Person) {
    persons.push(person)
    // return this.http.post(`${this.apiUrl}/${this.endpoint}`, this.serializer.toJson(person))
  }

  putPerson(person: Person) {

    return this.http.put(`${this.apiUrl}/${this.endpoint}/${person.getId()}`, this.serializer.toJson(person))
  }
}

class PersonSerializer {

  fromJson(json: any): Person {

    return new Person(json.id, json.firstname, json.lastname, json.telephone)
  }

  toJson(person: Person): any {

    return {
      firstname: person.getFirstName(),
      lastname: person.getLastName(),
      telephone: person.getTelephone()
    }
  }
}