import { Injectable } from '@angular/core';
import { IService } from '../IService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ServiceConstants from '../constants';
import { CreateTeacherDTO } from 'src/app/dtos/teacher/create-teacher.dto';
import { UpdateTeacherDTO } from 'src/app/dtos/teacher/update-teacher.dto';
import { TeacherDTO } from 'src/app/dtos/teacher/teacher.dto';

@Injectable({
  providedIn: 'root',
})
export class TeacherService implements IService {
  private TEACHERS_URL = `${ServiceConstants.BASE_URL}${ServiceConstants.MIDDLE}${ServiceConstants.TEACHERS}`;

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<TeacherDTO[]> {
    return this.http.get<TeacherDTO[]>(this.TEACHERS_URL);
  }

  findOne(index: number): Observable<TeacherDTO> {
    return this.http.get<TeacherDTO>(`${this.TEACHERS_URL}/${index}`);
  }

  create(dto: CreateTeacherDTO): Observable<any> {
    return this.http.post(this.TEACHERS_URL, dto);
  }

  update(index: number, dto: UpdateTeacherDTO): Observable<any> {
    return this.http.put(`${this.TEACHERS_URL}/${index}`, dto);
  }

  delete(index: number): Observable<any> {
    return this.http.delete(`${this.TEACHERS_URL}/${index}`);
  }
}
