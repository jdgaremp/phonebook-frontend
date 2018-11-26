export class Person {

    TELEPHONE_VALIDATION_REGEX=/\+\d{2,}\s\d{2,}\s\d{6,}$/

    constructor(private id: number, private firstName, private lastName, private telephone: string) { }

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
        return (this.firstName !== '' && 
            this.lastName !== '' && 
            this.TELEPHONE_VALIDATION_REGEX.test(this.telephone))
    }
}