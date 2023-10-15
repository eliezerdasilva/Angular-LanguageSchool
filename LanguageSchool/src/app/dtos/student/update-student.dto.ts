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

export class UpdateStudentDTO implements Partial<_UpdateStudent> {}