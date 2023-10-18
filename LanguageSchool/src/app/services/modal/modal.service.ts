import { EventEmitter, Injectable } from '@angular/core';
import { ClassroomDTO } from 'src/app/dtos/classroom/classroom.dto';
import { StudentDTO } from 'src/app/dtos/student/student.dto';
import { TeacherDTO } from 'src/app/dtos/teacher/teacher.dto';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  dataEvent = new EventEmitter<StudentDTO | TeacherDTO | ClassroomDTO>();

  sendDto(dto: StudentDTO | TeacherDTO | ClassroomDTO) {
    this.dataEvent.emit(dto)
  }
}
