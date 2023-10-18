interface _UpdateStudent {
    name: string
    lastName: string
    birthday: Date
    street: string
    city: string
    country: string
    zipcode: string
    active: boolean
    classroomId: number
}

export class UpdateStudentDTO {
    name: string
    lastName: string
    birthday: Date
    street: string
    city: string
    country: string
    zipcode: string
    active: boolean
    classroomId: number

    constructor(obj: any) {
        this.name = obj.name
        this.lastName = obj.lastName
        this.birthday = obj.birthday
        this.street = obj.street
        this.city = obj.city
        this.country = obj.country
        this.zipcode = obj.zipcode
        this.active = obj.active
        this.classroomId = obj.classroomId
    }
}