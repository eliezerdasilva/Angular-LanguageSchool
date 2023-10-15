interface _UpdateClassroom {
    id: number
    classCode: string
    teacherId: number
    languageType: string
    languageLevel: string
    startDate: Date
    endDate: Date
}

export class UpdateClassroomDTO implements Partial<_UpdateClassroom>{}