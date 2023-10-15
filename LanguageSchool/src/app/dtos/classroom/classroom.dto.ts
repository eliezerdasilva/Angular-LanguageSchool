export class ClassroomDTO {
    id: number
    classCode: string
    teacherId: number
    languageType: string
    languageLevel: string
    startDate: Date
    endDate: Date

    constructor(obj: any) {
        this.id = obj.id
        this.classCode = obj.classCode
        this.teacherId = obj.teacherId
        this.languageType = obj.languageType
        this.languageLevel = obj.languageLevel
        this.startDate = obj.startDate
        this.endDate = obj.endDate
    }
}