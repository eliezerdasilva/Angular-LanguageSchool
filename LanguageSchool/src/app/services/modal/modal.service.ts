import { EventEmitter, Injectable } from '@angular/core';
import { ClassroomDTO } from 'src/app/dtos/classroom/classroom.dto';
import { StudentDTO } from 'src/app/dtos/student/student.dto';
import { TeacherDTO } from 'src/app/dtos/teacher/teacher.dto';
import { StudentService } from '../student/student.service';
import { TeacherService } from '../teacher/teacher.service';
import { ClassroomService } from '../classroom/classroom.service';
import { CreateStudentDTO } from 'src/app/dtos/student/create-student.dto';
import { CreateTeacherDTO } from 'src/app/dtos/teacher/create-teacher.dto';
import { CreateClassroomDTO } from 'src/app/dtos/classroom/create-classroom.dto';
import { UpdateStudentDTO } from 'src/app/dtos/student/update-student.dto';
import { UpdateTeacherDTO } from 'src/app/dtos/teacher/update-teacher.dto';
import { UpdateClassroomDTO } from 'src/app/dtos/classroom/update-classroom.dto';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private readonly studentService: StudentService,
    private readonly teacherService: TeacherService,
    private readonly classroomService: ClassroomService
  ) { }

  dataEvent = new EventEmitter();

  sendDtoToModal(dto: StudentDTO | TeacherDTO | ClassroomDTO | null, dtoType: string) {
      console.log('sending it')
      console.log(dtoType)
      this.dataEvent.emit({type: dtoType, dto: dto})
  }

  save(dtoType: string, obj: any) {
    switch(dtoType) {
      case 'student':
        const sDTO: CreateStudentDTO = new CreateStudentDTO(obj)
        console.log(sDTO)
        this.studentService.create(sDTO).subscribe(
          (_) => {
            window.alert('Student created successfully');
          },
          (error) => {
            window.alert(`Error creating student`);
          }
        );
        break
      case 'teacher':
        const tDTO: CreateTeacherDTO = new CreateTeacherDTO(obj)
        console.log(tDTO)
        this.teacherService.create(tDTO).subscribe(
          (_) => {
            window.alert('Teacher created successfully:');
          },
          (error) => {
            window.alert(`Error creating Teacher`);
          }
        );
        break
      case 'classroom':
        const cDTO: CreateClassroomDTO = new CreateClassroomDTO(obj)
        console.log(cDTO)
        this.classroomService.create(cDTO).subscribe(
          (_) => {
            window.alert('Student created successfully');
          },
          (error) => {
            window.alert(`Error creating student`);
          }
        );
        break
      default:
        break
    }
  }

  update(dtoType: string, obj: any, objId: number) {
    switch(dtoType) {
      case 'student':
        const sDTO: UpdateStudentDTO = new UpdateStudentDTO(obj)
        console.log(sDTO)
        this.studentService.update(objId, sDTO).subscribe(
          (_) => {
            window.alert('Student updated successfully');
          },
          (error) => {
            window.alert(`Error updating student`);
          }
        );
        break
      case 'teacher':
        const tDTO: UpdateTeacherDTO = new UpdateTeacherDTO(obj)
        console.log(tDTO)
        this.teacherService.update(objId, tDTO).subscribe(
          (_) => {
            window.alert('Teacher updated successfully:');
          },
          (error) => {
            window.alert(`Error updating teacher`);
          }
        );
        break
      case 'classroom':
        const cDTO: UpdateClassroomDTO = new UpdateClassroomDTO(obj)
        console.log(cDTO)
        this.classroomService.update(objId, cDTO).subscribe(
          (_) => {
            window.alert('Classroom updated successfully:');
          },
          (error) => {
            window.alert(`Error updating classroom`);
          }
        );
        break
      default:
        break
    }
  }

  async delete(dtoType: string, dtoId: number) {
    console.log(dtoId)
    switch (dtoType) {
      case 'student':
        this.studentService.delete(dtoId).subscribe(
          () => {
            window.alert('Student deleted successfully.');
          },
          (error) => {
          window.alert(`Error deleting student`);
          }
        );
        break
      case 'teacher':
        this.teacherService.delete(dtoId).subscribe(
          () => {
            window.alert('Teacher deleted successfully.');
          },
          (error) => {
          window.alert(`Error deleting teacher`);
          }
        );
        break
      case 'classroom':
        this.classroomService.delete(dtoId).subscribe(
          () => {
            window.alert('Classroom deleted successfully.');
          },
          (error) => {
          window.alert(`Error deleting classroom`);
          }
        );
        break 
      default:
        break
    }
  }

}
