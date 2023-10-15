interface _UpdateTeacher {
    id: number
    name: string
    lastName: string
    birthday: Date
    street: string
    city: string
    country: string
    zipcode: string
    active: boolean
}

export class UpdateTeacherDTO implements Partial<_UpdateTeacher>{}