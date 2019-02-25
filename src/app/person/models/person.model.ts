export class Person {

    FIRST_NAME_VALIDATION_REGEX = /\S+/
    LAST_NAME_VALIDATION_REGEX = /\S+/
    TELEPHONE_VALIDATION_REGEX = /\+\d{2,}\s\d{2,}\s\d{6,}$/

    constructor(private id, private firstName, private lastName, private telephone: string) { }

    getId() {
        return this.id
    }

    getFirstName() {
        return this.firstName
    }

    getLastName() {
        return this.lastName
    }

    getTelephone() {
        return this.telephone
    }

    setFirstName(firstName: string) {
        this.firstName = firstName
    }

    setLastName(lastName: string) {
        this.lastName = lastName
    }

    setTelephone(telephone: string) {
        this.telephone = telephone
    }

    isValid() {
        return (this.FIRST_NAME_VALIDATION_REGEX.test(this.firstName) &&
            this.LAST_NAME_VALIDATION_REGEX.test(this.lastName) &&
            this.TELEPHONE_VALIDATION_REGEX.test(this.telephone))
    }
}