import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ServiceConstants from '../constants';
import { Observable } from 'rxjs';
import { IService } from '../IService';
import { StudentDTO } from '../../dtos/student/student.dto';
import { UpdateStudentDTO } from '../../dtos/student/update-student.dto';
import { CreateStudentDTO } from 'src/app/dtos/student/create-student.dto';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements IService {
  private STUDENT_URL = `${ServiceConstants.BASE_URL}${ServiceConstants.MIDDLE}${ServiceConstants.STUDENTS}`;

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<StudentDTO[]> {
    return this.http.get<StudentDTO[]>(this.STUDENT_URL);
  }

  findOne(index: number): Observable<StudentDTO> {
    return this.http.get<StudentDTO>(`${this.STUDENT_URL}/${index}`);
  }

  create(dto: CreateStudentDTO): Observable<any> {
    return this.http.post(this.STUDENT_URL, dto);
  }

  update(index: number, dto: UpdateStudentDTO): Observable<any> {
    return this.http.put(`${this.STUDENT_URL}/${index}`, dto);
  }

  delete(index: number): Observable<any> {
    return this.http.delete(`${this.STUDENT_URL}/${index}`);
  }
}






