import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ServiceConstants from '../constants';
import { Observable } from 'rxjs';
import { IService } from '../IService';
import { StudentDTO } from '../../dtos/student/student.dto';
import { CreateClassroomDTO } from '../../dtos/classroom/create-classroom.dto';
import { UpdateStudentDTO } from '../../dtos/student/update-student.dto';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements IService {

  private STUDENT_URL = `${ServiceConstants.BASE_URL}${ServiceConstants.STUDENTS}`

  constructor(private readonly http: HttpClient) { }

  findAll(): Observable<StudentDTO[]> {
    return this.http.get<StudentDTO[]>(this.STUDENT_URL)
  }
  findOne(index: number): Observable<StudentDTO> {
    return this.http.get<StudentDTO>(`${this.STUDENT_URL}/${index}`);
  }
  create(dto: CreateClassroomDTO): void {
    this.http.post(this.STUDENT_URL, dto);
  }
  update(index: number, dto: UpdateStudentDTO): void {
    this.http.put(`${this.STUDENT_URL}/${index}`, dto);
  }
  delete(index: number): void {
    this.http.delete(`${this.STUDENT_URL}/${index}`)
  }
}
