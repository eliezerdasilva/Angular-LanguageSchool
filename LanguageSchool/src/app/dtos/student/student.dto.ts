export class StudentDTO {
    id: number
    name: string
    lastName: string
    birthday: Date
    street: string
    city: string
    country: string
    zipcode: string
    active: boolean
    language: string
    level: string
    classroomId: number

    constructor(obj: any) {
        this.id = obj.id
        this.name = obj.name
        this.lastName = obj.lastName
        this.birthday = obj.birthday
        this.street = obj.street
        this.city = obj.city
        this.country = obj.country
        this.zipcode = obj.zipcode
        this.active = obj.active
        this.language = obj.language
        this.level = obj.languageLevel
        this.classroomId = obj.classroomId
    }
}