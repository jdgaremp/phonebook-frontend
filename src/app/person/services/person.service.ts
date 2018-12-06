import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from '../models/person.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


const persons: Person[] = [
  new Person(0, "John", "Doe", "+33 00 00000"),
  new Person(1, "Martine", "Bertrand", "+33 05 56565656"),
  new Person(3, "Gérard", "Pilat", "+33 890 0654321"),
  new Person(4, "Mickael", "Douglas", "+32 34 44658798")
]

@Injectable()
export class PersonService {

  //apiUrl = 'http://localhost:8080'
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
    const tableOfPersons: Person[] = []
    for (var i = 0; i < persons.length; i++) {

      console.log("person " + persons[i])

      console.log("persons[i].getFirstName().indexOf(term)  " + persons[i].getFirstName().indexOf(term))
      console.log("persons[i].getLastName().indexOf(term)  " + persons[i].getLastName().indexOf(term))
      console.log("persons[i].getLastName().indexOf(term)  " + persons[i].getLastName().indexOf(term))





      if (persons[i].getFirstName().indexOf(term) != -1) {
        console.log("first name")

        tableOfPersons.push(persons[i])
        if (tableOfPersons != null && tableOfPersons.indexOf(persons[i]) === -1) {
          tableOfPersons.push(persons[i])
        }
      }
      if (persons[i].getLastName().indexOf(term) != -1) {
        console.log("last name")
        if (tableOfPersons != null && tableOfPersons.indexOf(persons[i]) === -1) {
          tableOfPersons.push(persons[i])
        }
      }
      if (persons[i].getTelephone().indexOf(term) != -1) {
        console.log("telephone")
        tableOfPersons.push(persons[i])
        if (tableOfPersons != null && tableOfPersons.indexOf(persons[i]) === -1) {
          tableOfPersons.push(persons[i])
        }
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