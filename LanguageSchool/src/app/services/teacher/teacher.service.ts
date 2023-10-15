import { Injectable } from '@angular/core';
import { IService } from '../IService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ServiceConstants from '../constants';
import { CreateTeacherDTO } from 'src/app/dtos/teacher/create-teacher.dto';
import { UpdateTeacherDTO } from 'src/app/dtos/teacher/update-teacher.dto';

@Injectable({
  providedIn: 'root'
})
export class TeacherService implements IService { 

  private TEACHERS_URL = `${ServiceConstants.BASE_URL}${ServiceConstants.TEACHERS}`

  constructor(private readonly http: HttpClient) { }
  findAll(): Observable<TeacherDTO[]> {
    return this.http.get<TeacherDTO[]>(this.TEACHERS_URL)
  }
  findOne(index: number) {
    return this.http.get(`${this.TEACHERS_URL}/${index}`)
  }
  create(dto: CreateTeacherDTO): void {
    this.http.post<CreateTeacherDTO>(this.TEACHERS_URL, dto)
  }
  update(index: number, dto: UpdateTeacherDTO): void {
    this.http.put(`${this.TEACHERS_URL}/${index}/${index}`, dto)
  }
  delete(index: number): void {
    this.http.delete(`${this.TEACHERS_URL}/${index}`)
  }
}
