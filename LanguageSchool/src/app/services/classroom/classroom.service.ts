import { Injectable } from '@angular/core';
import { IService } from '../IService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ServiceConstants from '../constants';
import { ClassroomDTO } from 'src/app/dtos/classroom/classroom.dto';
import { CreateClassroomDTO } from 'src/app/dtos/classroom/create-classroom.dto';
import { UpdateClassroomDTO } from 'src/app/dtos/classroom/update-classroom.dto';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService implements IService{

  private CLASSROOMS_URL = `${ServiceConstants.BASE_URL}${ServiceConstants.MIDDLE}${ServiceConstants.CLASSROOMS}`

  constructor(private readonly http: HttpClient) { }
  findAll(): Observable<ClassroomDTO[]> {
    return this.http.get<ClassroomDTO[]>(this.CLASSROOMS_URL)
  }
  findOne(index: number): Observable<ClassroomDTO> {
    return this.http.get<ClassroomDTO>(`${this.CLASSROOMS_URL}/${index}`)
  }
  create(dto: CreateClassroomDTO): void {
    this.http.post<ClassroomDTO[]>(this.CLASSROOMS_URL, dto)
  }
  update(index: number, dto: UpdateClassroomDTO): void {
    this.http.put<ClassroomDTO>(`${this.CLASSROOMS_URL}/${index}`, dto)
  }
  delete(index: number): void {
    this.http.delete(`${this.CLASSROOMS_URL}/${index}`)
  }
}
