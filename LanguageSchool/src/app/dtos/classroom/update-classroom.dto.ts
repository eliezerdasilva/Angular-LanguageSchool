interface _UpdateClassroom {
    id: number
    classCode: string
    teacherId: number
    languageType: string
    languageLevel: string
    startDate: Date
    endDate: Date
}

export class UpdateClassroomDTO {
    classCode: string
    teacherId: number
    languageType: string
    languageLevel: string
    startDate: Date
    endDate: Date

    constructor(obj: any) {
        this.classCode = obj.classCode
        this.teacherId = obj.teacherId
        this.languageType = obj.languageType
        this.languageLevel = obj.languageLevel
        this.startDate = obj.startDate
        this.endDate = obj.endDate
    }        
}