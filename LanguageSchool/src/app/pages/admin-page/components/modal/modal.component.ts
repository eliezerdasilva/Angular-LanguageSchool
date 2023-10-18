import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClassroomDTO } from 'src/app/dtos/classroom/classroom.dto';
import { CreateClassroomDTO } from 'src/app/dtos/classroom/create-classroom.dto';
import { CreateStudentDTO } from 'src/app/dtos/student/create-student.dto';
import { StudentDTO } from 'src/app/dtos/student/student.dto';
import { CreateTeacherDTO } from 'src/app/dtos/teacher/create-teacher.dto';
import { TeacherDTO } from 'src/app/dtos/teacher/teacher.dto';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private readonly modalService: ModalService, private readonly formBuilder: FormBuilder) {
  }

  dto: StudentDTO | TeacherDTO | ClassroomDTO | any | null = null
  isDto: boolean = false
  dtoType: string = "oi"
  formGroup: FormGroup = new FormGroup({
  })
  action: string = ""

  ngOnInit(): void {
    this.modalService.dataEvent.subscribe((data) => {
      console.log('New data going through the pipe')
      this.dtoType = data.type
      if (data.dto != null) {
        this.action = 'update'
        this.dto = data.dto
        this.isDto = true

      } else {
        this.action = 'create'
        this.isDto = false
      }
      this.fillFormGroup(this.dtoType)
      this.show()
      console.log(this.dtoType)
    })
    
  }

  private fillFormGroup(dtoType: string) {
    switch(dtoType) {
      case 'student':
        this.buildFormGroupStudent()
        break
      case 'teacher':
        this.buildFormGroupTeacher()
        break
      case 'classroom':
        this.buildFormGroupClassroom()
        break
      default: 
        break
    }
  }

  private buildFormGroupStudent() {
    this.formGroup = this.formBuilder.group({
      name: this.dto?.name,
      lastName: this.dto?.lastName,
      language: this.dto?.languageType,
      level: this.dto?.languageLevel,
      street: this.dto?.street,
      city: this.dto?.city,
      country: this.dto?.country

    })
  }

  private buildFormGroupTeacher() {
    this.formGroup = this.formBuilder.group({
      name: this.dto?.name,
      lastName: this.dto?.lastName,
      street: this.dto?.street,
      city: this.dto?.city,
      country: this.dto?.country,
      language: this.dto?.language
    })
  }

  private buildFormGroupClassroom() {
    this.formGroup = this.formBuilder.group({
      classCode: this.dto?.classCode,
      teacherId: this.dto?.teacherId,
      language: this.dto?.languageType,
      level: this.dto?.languageLevel
    })
  }

  hide() {
    const whole = document.querySelector('.whole')
    whole?.classList.add('hidden')
  }

  show() {
    const whole = document.querySelector('.whole')
    whole?.classList.remove('hidden')
  }

  onCancel() {
    this.clean()
    this.hide()
  }

  onSaveBtnClick() {
    if (this.action === 'create') {
      this.onSave()
    } else if (this.action === 'update') {
      this.onUpdate()
    }
  }

  onSave() {
    const values = this.formGroup.value
    this.modalService.save(this.dtoType, values)

    
    this.clean()
    this.hide()
  }

  onUpdate() {
    const values = this.formGroup.value
    this.modalService.update(this.dtoType, values, this.dto.id)
    
    this.clean()
    this.hide()    
  }

  onDelete() {
    this.modalService.delete(this.dtoType, this.dto.id)

    this.clean()
    this.hide()
  }

  private clean() {
    this.dto = null
    this.dtoType = ""
    this.formGroup = new FormGroup({
    })
  }


}
