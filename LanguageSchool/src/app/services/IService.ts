import { Observable } from "rxjs"

export interface IService {
    findAll(): Observable<any[]>
    findOne(index: number): any
    create(dto: any): void
    update(index: number, dto: any): void
    delete(index: number): void
}